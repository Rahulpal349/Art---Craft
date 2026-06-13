const path = require('path');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: path.join(__dirname, '../.env.local') });
dotenv.config();

const supabase = require('./config/supabase');

const products = [
    {
        name: "Sea Mist Nesting Bowls",
        price: 1125,
        category: "Ceramics",
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Slate Linen Runner",
        price: 850,
        category: "Textiles",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Cobalt Water Pitcher",
        price: 1100,
        category: "Ceramics",
        image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Handwoven Cotton Throw",
        price: 2400,
        category: "Textiles",
        image: "https://images.unsplash.com/photo-1580227161102-15fecfc5d3d4?q=80&w=600&auto=format&fit=crop"
    }
];

async function seedData() {
    console.log('Seeding data to Supabase...');
    
    for (const product of products) {
        const { data, error } = await supabase
            .from('products')
            .insert([product]);
            
        if (error) {
            console.error(`Error inserting ${product.name}:`, error.message);
        } else {
            console.log(`Successfully inserted ${product.name}`);
        }
    }
    
    console.log('Seeding complete!');
    process.exit();
}

seedData();
