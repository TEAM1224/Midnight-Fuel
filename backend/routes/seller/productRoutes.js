const express = require('express');

const { addProduct, editProduct ,fetchProduct,deleteProduct } = require('../../controllers/seller/productController')

const router = express.Router();

router.get('/get-product', fetchProduct)
router.post('/add/:sellerId', addProduct);
router.put('/edit/:productId', editProduct);
router.delete('/delete/:productId', deleteProduct)



module.exports = router;

