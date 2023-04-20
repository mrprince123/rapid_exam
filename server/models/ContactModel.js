const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    Username: {
        required: true,
        type: String
    },
    Email: {
        required: true,
        type: String
    },
    Phone : {
        required : true,
        type : Number
    },
    Purpose: {
        required: true,
        type: String
    },
    Message: {
        required: true,
        type: String
    }
});

const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;