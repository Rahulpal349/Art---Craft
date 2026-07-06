/**
 * handlers/upload.js
 *
 * Generates S3 pre-signed PUT URLs for direct browser-to-S3 image uploads.
 * Replaces supabase.storage.from('product-images').upload(...)
 *
 * Flow:
 *  1. Frontend calls POST /upload/presign  { filename, contentType }
 *  2. This Lambda returns a pre-signed S3 PUT URL + the final public CDN URL
 *  3. Frontend PUTs the file directly to S3 using the pre-signed URL
 *  4. Frontend stores the CDN URL in the product record
 */
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const s3 = new S3Client({ region: process.env.REGION || 'ap-southeast-2' });

const BUCKET = process.env.S3_BUCKET;
const CDN_DOMAIN = process.env.CLOUDFRONT_DOMAIN; // Set after first deploy

function response(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    },
    body: JSON.stringify(body),
  };
}

exports.handler = async (event) => {
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const { filename, contentType } = body;

    if (!filename || !contentType) {
      return response(400, { error: 'filename and contentType are required' });
    }

    // Generate a unique S3 key
    const ext = filename.split('.').pop().toLowerCase();
    const key = `products/${Date.now()}-${Math.random().toString(36).substring(2)}.${ext}`;

    const command = new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      ContentType: contentType,
    });

    const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 300 }); // 5 min expiry

    // Public URL via CloudFront CDN (or direct S3 if CDN not set)
    const publicUrl = CDN_DOMAIN
      ? `https://${CDN_DOMAIN}/${key}`
      : `https://${BUCKET}.s3.amazonaws.com/${key}`;

    return response(200, { uploadUrl, publicUrl, key });
  } catch (err) {
    console.error('Upload handler error:', err);
    return response(500, { error: 'Failed to generate upload URL' });
  }
};
