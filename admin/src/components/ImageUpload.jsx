import React, { useRef } from 'react';

export default function ImageUpload({ files, existingImages = [], onFilesChange, onExistingChange }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const totalCount = existingImages.length + files.length + newFiles.length;
      if (totalCount > 5) {
        alert('You can only upload up to 5 images in total.');
        onFilesChange([...files, ...newFiles].slice(0, 5 - existingImages.length));
      } else {
        onFilesChange([...files, ...newFiles]);
      }
    }
  };

  const removeNewFile = (index) => {
    onFilesChange(files.filter((_, i) => i !== index));
  };

  const removeExistingImage = (index) => {
    if (onExistingChange) {
      onExistingChange(existingImages.filter((_, i) => i !== index));
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div 
        style={{
          border: '2px dashed var(--border-color)',
          borderRadius: 'var(--radius-md)',
          padding: '2rem',
          textAlign: 'center',
          cursor: 'pointer',
          background: 'var(--bg-secondary)',
          color: 'var(--text-muted)'
        }}
        onClick={() => fileInputRef.current?.click()}
      >
        <p style={{ margin: 0 }}>Click to browse or drag images here</p>
        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Up to 5 images (JPEG, PNG)</p>
        <input 
          type="file" 
          multiple 
          accept="image/*" 
          onChange={handleFileChange} 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
        />
      </div>

      {(files.length > 0 || existingImages.length > 0) && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {existingImages.map((url, i) => (
            <div key={`existing-${i}`} style={{ position: 'relative', width: '100px', height: '100px' }}>
              <img src={url} alt="Product" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
              <button 
                type="button"
                onClick={() => removeExistingImage(i)}
                style={{ position: 'absolute', top: '5px', right: '5px', background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', borderRadius: '50%', width: '24px', height: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                &times;
              </button>
            </div>
          ))}
          
          {files.map((file, i) => (
            <div key={`new-${i}`} style={{ position: 'relative', width: '100px', height: '100px' }}>
              <img src={URL.createObjectURL(file)} alt="New upload" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
              <button 
                type="button"
                onClick={() => removeNewFile(i)}
                style={{ position: 'absolute', top: '5px', right: '5px', background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', borderRadius: '50%', width: '24px', height: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
