const  express = require('express');
const delauthorsRouter = express.Router();
const Delauthordata = require('../model/Delauthordata');

function router(nav){

    delauthorsRouter.get('/',function(req,res){
        res.render("delauthors",
        {
            nav, 
            title:'Library App',
    
        });
    });

delauthorsRouter.post('/add',function(req,res){
   var item = {
   title: req.body.title,
   genre: req.body.genre,
   works: req.body.works,
   image: req.body.image
   }

 var book = Delauthordata(item);
 book.save();//Saving to the database
 res.redirect('/books');


});


    return delauthorsRouter;

}

module.exports = router;