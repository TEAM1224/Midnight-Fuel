const { createToken } = require('../../config/jwt');
const Seller = require('../../model/sellerModel');


async function signupSeller(req, res) {
    const { name, email, password, phone, address } = req.body;
    console.log(req.body);
    try {
        let seller = new Seller({
            name,
            email,
            password,
            roll,
            phone,
            avatar
            }
        );
        const sellerSaved = await seller.save();
        console.log('ss: ', sellerSaved);
        const token = createToken({email,sellerId:sellerSaved._id});
        res.status(201).json({
            success: 'true',
            data: seller,
            token
        });
    }catch (err) {
        console.log('eror is ',err);
        res.status(400).json({
            success: 'false',
            message: err
        });
    }
}

async function loginSeller(req, res) {
    const { email, password } = req.body;
    console.log('login')
    try {
        let seller = await Seller.findOne({email, password});
        if (!seller) {
            res.status(400).json({
                success: 'false',
                message: 'Invalid credentials'
            });
        }
        const token = createToken({email,sellerId:seller._id});
        res.status(200).json({
            success: 'true',
            data: seller,
            token
        });
    }catch (err) {
        console.log('eror is ',err);
        res.status(400).json({
            success: 'false',
            message: err
        });
    }
}

module.exports = { signupSeller, loginSeller };
