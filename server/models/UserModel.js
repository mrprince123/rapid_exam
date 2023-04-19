const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Username : {
        type : String,
        required : true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    CPassword: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]

})


// Hashing and Encrypting the Password
UserSchema.pre('save', async function (next) {
    if (this.isModified('Password')) {
        this.Password = await bcrypt.hash(this.Password, 12);
        this.CPassword = await bcrypt.hash(this.CPassword, 12);
    }
    next();
});

// This is for the generating Token
UserSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.CLIENT_SECRET);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;

    } catch (error) {
        console.log(error);
    }
}

const User = mongoose.model("User", UserSchema);
module.exports = User;