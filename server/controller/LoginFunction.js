const UserModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');


const LoginPostFun = async (req, res) => {
    try {

        const {Email, Password} = req.body;

        if(!Email || !Password) {
            return res.status(401).json({error : "Please fill all the fields"});
        }

        const UserLogin = await UserModel.findOne({Email: Email});

        if (UserLogin) {
            const isEmailMatch = await bcrypt.compare(Email, UserLogin.Email);
            const isPasswordMatch = await bcrypt.compare(Password, UserLogin.Password);

            token = await UserLogin.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (isEmailMatch || isPasswordMatch) {
                res.status(200).json({ message: "User Login Successfully" });
            } else {
                res.status(400).json({ error: "User Login Failed" });
            }
        }
        
    } catch (error) {
        console.log("This is the LoginFunction error : " + error);
    }
}


module.exports = LoginPostFun;