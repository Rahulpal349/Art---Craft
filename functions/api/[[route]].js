import { Hono } from 'hono';
import { handle } from 'hono/cloudflare-pages';
import { createClient } from '@supabase/supabase-js';

const app = new Hono().basePath('/api');

// Middleware to inject Supabase client
app.use('*', async (c, next) => {
    // In Pages, environment variables are accessed via c.env
    const supabaseUrl = c.env.SUPABASE_URL;
    const supabaseKey = c.env.SUPABASE_ANON_KEY;
    
    if (supabaseUrl && supabaseKey) {
        const supabase = createClient(supabaseUrl, supabaseKey);
        c.set('supabase', supabase);
    }
    await next();
});

// @desc    Get all products
// @route   GET /api/products
app.get('/products', async (c) => {
    const supabase = c.get('supabase');
    if (!supabase) return c.json({ success: false, error: 'Supabase client not initialized' }, 500);

    const { data: products, error } = await supabase.from('products').select('*').order('id', { ascending: true });
    
    if (error) {
        return c.json({ success: false, error: error.message }, 500);
    }
    return c.json(products);
});

// @desc    Add product
// @route   POST /api/products
app.post('/products', async (c) => {
    const supabase = c.get('supabase');
    if (!supabase) return c.json({ success: false, error: 'Supabase client not initialized' }, 500);

    try {
        const formData = await c.req.parseBody();
        const name = formData.name;
        const price = formData.price;
        const category = formData.category;
        const file = formData.image;

        let imageUrl = null;

        if (file && typeof file === 'object' && file.size > 0) {
            // Cloudflare Pages/Workers parses file as a File object which has arrayBuffer()
            const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '')}`;
            const arrayBuffer = await file.arrayBuffer();
            
            const { data, error: uploadError } = await supabase
                .storage
                .from('products')
                .upload(fileName, arrayBuffer, {
                    contentType: file.type
                });
                
            if (uploadError) throw uploadError;

            const { data: publicUrlData } = supabase
                .storage
                .from('products')
                .getPublicUrl(fileName);
                
            imageUrl = publicUrlData.publicUrl;
        }

        const newProduct = {
            name,
            price: parseFloat(price),
            category,
            image: imageUrl
        };

        const { data, error } = await supabase
            .from('products')
            .insert([newProduct])
            .select();

        if (error) throw error;

        return c.json({ success: true, data: data[0] }, 201);
    } catch (err) {
        return c.json({ success: false, error: err.message }, 500);
    }
});

export const onRequest = handle(app);
