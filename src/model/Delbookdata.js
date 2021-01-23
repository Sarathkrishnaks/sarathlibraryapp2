// Accessing the mongoose package
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

// Schema definition
const DelbookSchema = new Schema({
    title:String,
    genre:String,
    image:String 
});

// Model creation
 var Delbookdata = mongoose.model('delbookdata',DelbookSchema);

 module.exports = Delbookdata;