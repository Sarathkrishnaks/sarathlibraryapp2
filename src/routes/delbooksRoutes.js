const  express = require('express');
const delbooksRouter = express.Router();
const Delbookdata = require('../model/Delbookdata');

function router(nav){

    delbooksRouter.get('/',function(req,res){
        res.render("delbooks",
        {
            nav, 
            title:'Library App',
    
        });
    });

delbooksRouter.post('/add',function(req,res){
   var item = {
   title: req.body.title,
   author: req.body.author,
   image: req.body.image
   }

 var book = Delbookdata(item);
 book.save();//Saving to the database
 res.redirect('/books');


});

    return delbooksRouter;

}

module.exports = router;