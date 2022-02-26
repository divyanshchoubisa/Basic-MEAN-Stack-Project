//Requiring Mongoose
const mongoose = require('mongoose');

//Setting Up The Blog Schema
const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    Content:{
        type: String,
        required: true
    }
})

//Exporting Blog Model
module.exports = mongoose.model('blogModel', blogSchema)
