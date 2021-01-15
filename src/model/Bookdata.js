
// Accessing the mongoose package
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb+srv://sarath:sarath@fsdfiles.gomb9.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

// Schema definition
const BookSchema = new Schema({
    title:String,
    author:String,
    image:String 
});

// Model creation
 var Bookdata = mongoose.model('bookdata',BookSchema);

 module.exports = Bookdata;