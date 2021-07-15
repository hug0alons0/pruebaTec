const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');


module.exports =function(){ 
    
//Te da todo de la BBDD
    router.get('/products',
    productsControllers.getProducts
    )

// Te da el nombre de la BBDD
    router.get('/products/:name',
    productsControllers.getProduct
    )

// Te da la ID de la BBDD
    router.get('/products/:price',
    productsControllers.getProduct
    )
    
    return router;
}