const Products = require('../models/Products');

//  Obtiene todos los productos 

exports.getProducts = async (req, res, next) => {
    try {
        const products = await Products.find({});
        res.json(products);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Obtiene 1 producto por ID 

exports.getProduct = async (req, res, next) => {
    try {
        const product = await productsSchema.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.log(error);
        next();
    }
}