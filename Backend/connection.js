//Importing Mongoose
const mongoose = require('mongoose');

//Setting Up Conection With The Database
mongoose.connect("mongodb://localhost:27017/BlogProject", { useNewUrlParser: true , useUnifiedTopology: true })
.then( () => console.log("Connection To Database Successful !"))
.catch((err) => console.log(err));

//Exporting Module
module.exports = mongoose
