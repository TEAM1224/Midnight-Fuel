const express = require('express');
const { loginAdmin, signupAdmin } = require('../../controllers/admin/adminController');

const router = express.Router();

router.post('/login', loginAdmin)
router.post('/signup', signupAdmin)



module.exports = router