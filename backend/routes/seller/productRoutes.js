const express = require('express');
const { addProduct, editProduct ,fetchProduct,deleteProduct } = require('../../controllers/seller/productController');
const { authentication } = require('../../middleware/authMiddleware');

const router = express.Router();

router.get('/get-products',authentication, fetchProduct)
router.post('/add', addProduct);
router.put('/edit/:productId', editProduct);
router.delete('/delete/:productId', deleteProduct)



module.exports = router;

