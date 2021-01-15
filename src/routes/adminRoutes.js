const  express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav){

    adminRouter.get('/',function(req,res){
        res.render("addbook",
        {
            nav, 
            title:'Library App',
    
        });
    });

adminRouter.post('/add',function(req,res){
   var item = {
   title: req.body.title,
   author: req.body.author,
   image: req.body.image
   }

 var book = Bookdata(item);
 book.save();//Saving to the database
 res.redirect('/books');


});

    return adminRouter;

}

module.exports = router;