// Accessing the mongoose package
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb+srv://sarath:sarath@fsdfiles.gomb9.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

// Schema definition
const AuthorSchema = new Schema({
    title:String,
    genre:String,
    works:String,
    image:String 
});

// Model creation
 var Authordata = mongoose.model('authordata',AuthorSchema);

 module.exports = Authordata;