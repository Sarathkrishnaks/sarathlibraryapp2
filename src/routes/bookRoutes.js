const  express = require('express');
const booksRouter = express.Router();
function router(nav){


var books = [
    {
        title:'Tom and Jerry',
        author: 'Joseph Barbara',
        genre:'Cartoon',
        img:"tom and jerry.jpg"
        },
        {
            title:'Harry Potter',
            author: 'J K Rowling',
            genre:'Fantasy',
            img:"harry.jpg"
            },
            {
                title:'Your Saul is A River',
                author: 'Nikita Gill',
                genre:'Poetry',
                img:"your soul.jpg"
                },
]


booksRouter.get('/',function(req,res){
    res.render("books",
    {
        nav, 
        title:'Library App',
        books

    });
});

    

booksRouter.get('/:id',function(req,res){
     const id = req.params.id
    res.render('book',{ 
        nav,
        title:'Library App',
        book:books[id]

    })
})
return booksRouter;

}

module.exports = router;