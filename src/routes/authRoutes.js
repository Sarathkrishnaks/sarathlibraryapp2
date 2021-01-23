const  express = require('express');
const authRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(nav){

    authRouter.get('/',function(req,res){
        res.render("addauthor",
        {
            nav, 
            title:'Library App',
    
        });
    });

authRouter.post('/add',function(req,res){
   var item = {
   title: req.body.title,
   genre: req.body.genre,
   works: req.body.works,
   image: req.body.image
   }

 var book = Authordata(item);
 book.save();//Saving to the database
 res.redirect('/authors');


});

    return authRouter;

}

module.exports = router;
