const  express = require('express');
const authorsRouter = express.Router();
function router(nav){


var authors = [
    {
        title:'Joseph Barbara',
        works: ' Works: Tom and Jerry,David and Goliath,Scooby-Doo Activity Book',
        genre:'Cartoon',
        img:"barbara.jpg"
        },
        {
            title:'J K Rowling',
            works: ' Works: Harry Potter,Cormoron Strike Series',
            genre:'Fantasy',
            img:"jk.jpg"
            },
            {
                title:'Nikita Gill',
                works: 'Works: Your Saul is A River,Fire and Beauty,Your Heart Is The Sea',
                genre:'Poetry',
                img:"nikitagill.jpg"
                },
]


authorsRouter.get('/',function(req,res){
    res.render("authors",
    {
        nav, 
        title:'Library App',
        authors

    });
});

    

authorsRouter.get('/:id',function(req,res){
     const id = req.params.id
    res.render('author',{ 
        nav,
        title:'Library App',
        author:authors[id]

    })
})
return authorsRouter;

}

module.exports = router;