const ContactModel = require('../models/ContactModel');

const ContactGetFun = (req, res) => {
    res.send("This is the Contact Get Function");
}

const ContactPostFun = async (req, res) => {

    const { Username, Email, Phone, Purpose, Message } = req.body;

    if (!Username || !Email || !Phone || !Purpose || !Message) {
        return res.status(401).json({ error: "Please fill all the fields" });
    }

    // Checking if the User has entered the correct phone number.
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(Phone)) {
        return res.status(401).json({ error: "Please enter a valid phone number" });
    }
    
    const contactItem = new ContactModel({
        Username,
        Email,
        Phone,
        Purpose,
        Message
    })

    const contactData = await contactItem.save();

    if (contactData) {
        res.status(200).json({ message: "Contact Data Send Successfully" });
    } else {
        res.status(402).json({ error: "Contact Message not send Successfully" });
    }

}


module.exports = { ContactGetFun, ContactPostFun };