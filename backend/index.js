//IMPORTS
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGOURI } = require('./keys')

//mongo connection
mongoose.connect(
    MONGOURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("connected to DB");
    }
);


//routes and model 
// require('cors')
// app.use(cors())
app.use(express.json());
require("./models/user");
app.use(require("./routes/auth"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});