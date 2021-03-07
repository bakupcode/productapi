const express = require('express');
const router = express.Router();
const productController = require('./controller');

router.post('/', productController.createProducts);

router
    .route('/')
    .get(productController.getProducts);

router
    .route('/:id')
    .get(productController.getProduct)
    .put(productController.updateProduct)

module.exports = router;