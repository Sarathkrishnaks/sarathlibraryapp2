const  express = require('express');
const { db } = require('../model/Bookdata');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){


// var books = [
//     {
//         title:'Tom and Jerry',
//         author: 'Joseph Barbara',
//         genre:'Cartoon',
//         img:"tom and jerry.jpg"
//         },
//         {
//             title:'Harry Potter',
//             author: 'J K Rowling',
//             genre:'Fantasy',
//             img:"harry.jpg"
//             },
//             {
//                 title:'Your Saul is A River',
//                 author: 'Nikita Gill',
//                 genre:'Poetry',
//                 img:"your soul.jpg"
//                 },
// ]


booksRouter.get('/',function(req,res){
    Bookdata.find()
        .then(function(books){
            res.render("books",
            {
                nav, 
                title:'Library App',
                books
            });
        })
    });

    

booksRouter.get('/:id',function(req,res){
     const id = req.params.id
     Bookdata.findOne({_id:id})
     .then(function(book){
        res.render('book',{ 
            nav,
            title:'Library App',
            book
        });
     })
    
});

booksRouter.get('/delete/:i',function(req,res){
    const id = req.params.i
    Bookdata.deleteOne({_id:id})
    .then(function(){
       res.redirect('/books');
          
       })
    });
   


return booksRouter;

}

module.exports = router;