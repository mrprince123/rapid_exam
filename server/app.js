require('dotenv').config();
const express  = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cors());

// This is for the Database connection
require('./DB/Connnection');

// Here I  will declear all  the  routes
app.use(require('./routes/About'));
app.use(require('./routes/Login'));
app.use(require('./routes/Register'));
app.use(require('./routes/Contact'));

const PORT = process.env.PORT;
app.listen(PORT, function(){
    console.log(`Server is running on the PORT ${PORT}`);
});