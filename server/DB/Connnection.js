require('dotenv').config();

const mongoose = require('mongoose');
const url = process.env.URL;

mongoose.connect(url, {
    useNewUrlParser : true
}).then(() => {
    console.log("Database is connected Succeessfully");
}).catch((err) => {
    console.log(`Data connection error ${err}`);
})