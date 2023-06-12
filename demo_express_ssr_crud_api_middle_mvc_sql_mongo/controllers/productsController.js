// Controlador - Lógica de negocio de la app
const fetch = require('node-fetch');

const getProducts = async (req, res) => {
    if (req.params.id) { // con ID
        try {
            let response = await fetch(`https://fakestoreapi.com/products/${req.params.id}`); //{}
            let products = await response.json(); //{}
            res.render('products.pug', { "products": [products], msj:"un producto" }); // Pinta datos en el pug
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
        }
    } else { // sin ID --> TODOS los products
        try {
            let response = await fetch(`https://fakestoreapi.com/products`); // []
            let products = await response.json(); // []
            res.render('products', { products, msj:"todos los productos" }); // Pinta datos en el pug
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
        }
    }
}
module.exports = {
    getProducts,
    
}