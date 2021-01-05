const  express = require('express');
const app = express();
const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/addbook',name:'Add Book'
    },
    {
        link:'/signup',name:'Signup'
    },
    {
        link:'/login',name:'Login'
    },

        ];
const booksRouter = require('./src/routes/bookRoutes')(nav)
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',booksRouter);
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library App'
    });
});



const authorsRouter = require('./src/routes/authorRoutes')(nav)
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/authors',authorsRouter);
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library App'
    });
});

const loginRouter = require('./src/routes/loginRoutes')(nav)
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/login',loginRouter);
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library App'
    });
});

const signupRouter = require('./src/routes/signupRoutes')(nav)
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/signup',signupRouter);
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library App'
    });
});

const addbookRouter = require('./src/routes/addbookRoutes')(nav)
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/addbook',addbookRouter);
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library App'
    });
});

app.listen(5000);


