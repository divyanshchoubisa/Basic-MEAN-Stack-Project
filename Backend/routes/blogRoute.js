//Requiring Express
const express = require('express');
//Creating a Express Router
const router = express.Router();
//Requiring Blog Model and Mongoose
const blogModel = require('../models/blogmodel.js');
let mongoose = require('mongoose')

//This router will get all the data on /blog route
router.get('/', (req, res) => {
    blogModel.find((err, docs) => {
        if(!err){
            res.send(docs);
        }
        else{
            console.log(err);
        }
    });
})

//Router to get a particular blogpost with a particualr id
router.get('/:id', (req, res) => {
    //Checking if id is valid or not
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).send(`NOT RECORD FOUND WITH id: ${req.params.id} !`);
    }

    //Finding the particular blog with that particular id
    blogModel.findById(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc)
        }
        else{
            console.log(err);
        }
    });
});

//This router wii take the data coming from front-end form and will create and save a new blogpost in the database
router.post('/', (req, res) => {
    //Creating a new blogmodel and getting the data from request body
    let blog = new blogModel({
        title: req.body.title,
        category: req.body.category,
        Content: req.body.Content
    })
    //Saving the blog in the database
    blog.save((err, doc) => {
        if(!err){
            res.send(doc)
        }
        else{
            console.log(err);
        }
    });
})

//Thi router will get a particular blog with a particular id and will edit it
router.put('/:id', (req, res) => {
    //Checking if id is valid or not
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).send(`NOT RECORD FOUND WITH id: ${req.params.id} !`);
    }

    //Creating a variable and getting data from request body
    let blog = {
        title: req.body.title,
        category: req.body.category,
        Content: req.body.Content
    }

    //Finding the blog by the particular id and updating with new information.
    blogModel.findByIdAndUpdate(req.params.id, {$set: blog}, {new: true}, (err, doc) => {
        if(!err){
            res.send(doc)
        }
        else{
            console.log(err);
        }
    })
});

//This router will delete a particular blog with a particular id 
router.delete('/:id', (req, res) => {
    //Checking if id is valid or not
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).send(`NO RECORD FOUND WITH id: ${req.params.id} !`);
    }

    //Findind the blog by id and removing it.
    blogModel.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc)
        }
        else{
            console.log(err);
        }
    })
});

//Exporting the router module
module.exports = router
