const UserModel = require('../models/UserModel');


const RegisterGetFun = async (req, res) => {

    try {
        const data = await UserModel.find({});
        res.send(data);

    } catch (error) {
        console.log("This is the error occure while getting the register Function");
    }

}

const RegisterPostFun = async (req, res) => {

    try {

        const { Username, Email, Password, CPassword } = req.body;

        if (!Username || !Email || !Password || !CPassword) {
            return res.status(401).json({ error: "Please fill all the fields" });
        }

        const EmailData = await UserModel.findOne({ Email: Email });


        if (EmailData) {
            return res.status(402).json({ error: "This Email already Registered with us" });
        } else if (Password != CPassword) {
            return res.status(403).json({ error: "Password and Conform password are not matching" });
        } else {
            const registerItem = new UserModel({
                Username,
                Email,
                Password,
                CPassword
            });

            const registerData = await registerItem.save();

            if (registerData) {
                return res.status(200).json({ message: "User Data Saved Successfully" });
            } else {
                return res.status(404).json({ error: "User Data not saved Successfully" });
            }

        }

    } catch (error) {
        console.log("This is the error when registering the data" + error);
    }

}


module.exports = {RegisterGetFun, RegisterPostFun};