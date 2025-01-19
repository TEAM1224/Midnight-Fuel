const Seller = require('../../model/sellerModel')
const User = require('../../model/userModel')


const getSeller = async(req, res)=>{
    try {
        const sellers = await Seller.find({});
        if(sellers.length == 0){
            return res.status(404).json({
                message: "No sellers found",
                data: [],
                success: true
            })
        }
        res.status(200).json({
            message: "Sellers found",
            data: sellers,
            success: true
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
            data: [],
            success: false
        })
    }
}

const getUser = async(req, res)=>{
    try {
        const users = await User.find({});
        if(users.length == 0){
            return res.status(200).json({
                message: "No users found",
                data: [],
                success: true
            })
        }
        res.status(200).json({
            message: "Users found",
            data: users,
            success: true
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",   
            data: [],
            success: false
        })
    }
}

module.exports = {getSeller, getUser}