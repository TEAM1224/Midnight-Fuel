const express = require('express');
const { getUser, getSeller } = require('../../controllers/admin/headQuarter');


const router = express.Router();

router.post('/get-users', getUser)
router.post('/get-sellers', getSeller)


module.exports = router