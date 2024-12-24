const express = require('express');
const { loginSeller, signupSeller } = require('../../controllers/seller/sellerController');

const router = express.Router();

router.post('/login',loginSeller)
router.post('/signup',signupSeller)

module.exports = router;