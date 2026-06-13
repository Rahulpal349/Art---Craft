const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.get('/', async (req, res) => {
    try {
        // Fetch from actual Supabase:
        const { data: products, error } = await supabase.from('products').select('*').order('id', { ascending: true });
        if (error) throw error;
        res.json(products);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// @desc    Add product
// @route   POST /api/products
// @access  Private/Admin
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { name, price, category } = req.body;
        let imageUrl = null;

        if (req.file) {
            const fileExt = req.file.originalname.split('.').pop();
            const fileName = `${Date.now()}.${fileExt}`;
            
            const { data, error: uploadError } = await supabase
                .storage
                .from('products')
                .upload(fileName, req.file.buffer, {
                    contentType: req.file.mimetype
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

        res.status(201).json({ success: true, data: data[0] });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;