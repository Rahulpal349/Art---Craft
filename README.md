# Artisanat Gallery

A complete e-commerce platform for handmade art and curated home decor. Features a Customer Storefront and an Admin Dashboard.

## Startup Instructions

### 1. Backend Setup
1. CD into the main directory (which acts as the backend root).
2. Install dependencies: `npm install`
3. Make sure you have MongoDB running locally or replace the `MONGO_URI` in `.env` with a MongoDB Atlas URI.
4. Run the development server: `npm run dev` (starts on port 5000)

### 2. Frontend Setup
The frontend consists of static files in the `client/` and `admin/` directories.
1. You can open `client/index.html` directly in your browser.
2. For the best experience, use an extension like VS Code Live Server to serve the static frontend on port 5500.

## Tech Stack
- Frontend: HTML5, CSS3 (variables), Vanilla JS
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
