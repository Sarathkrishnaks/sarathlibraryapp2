// Accessing the mongoose package
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

// Schema definition
const DelauthorSchema = new Schema({
    title:String,
    genre:String,
    works:String,
    image:String 
});

// Model creation
 var Delauthordata = mongoose.model('delauthordata',DelauthorSchema);

 module.exports = Delauthordata;