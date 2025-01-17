// app.js for a Furniture Shop UI
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Sample route for API
app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'Sofa', price: 299.99, image: '/images/sofa.jpg' },
        { id: 2, name: 'Dining Table', price: 499.99, image: '/images/dining_table.jpg' },
        { id: 3, name: 'Chair', price: 99.99, image: '/images/chair.jpg' },
    ];
    res.json(products);
});

// Catch-all route to serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
