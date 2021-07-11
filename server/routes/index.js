const express = require('express');
const router = express.Router();
const productsController= require('../controllers/productsControllers');


module.exports =function(){ 
    
//Te da todo de la BBDD
    router.get('/products',
    productsController.getProducts
        
    )

// Te da el nombre de la BBDD
    router.get('/products/:name',
    productsController.getProduct
    )

// Te da la ID de la BBDD
    router.get('/products/:price',
    productsController.getProduct
    )
    
    return router;
}