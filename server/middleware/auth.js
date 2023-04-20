require('dotenv').config();
const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');


const authenticate = async (req, res, next) => {
    try {

        const token  = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.CLIENT_SECRET);
        const rootUser = await UserModel.findOne({
            _id : verifyToken._id,
            'tokens.token' : token,
        });

        if(!rootUser){
            return res.status(401).json({error : "User Not Found"});
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();

    } catch (error){
        return res.status(402).json({error : "Unauthorized: No Token Found"});
    }
}

module.exports = authenticate;