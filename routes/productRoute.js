const express = require('express');
const router  = express.Router();
const productController = require('../controllers/product-controller');

router.post('/createProduct',productController.createProduct);
router.get('/allProducts',productController.getAllProducts);
router.get('/getProduct/:id',productController.getProduct);
router.put('/updateProduct/:id',productController.updateProduct);
router.delete('/deleteProduct/:id',productController.deleteProduct);

module.exports  = router;