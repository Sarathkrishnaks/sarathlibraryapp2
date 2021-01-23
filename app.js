const  express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/signup',name:'Signup'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/delauthors'
    },
    {
        link:'/delbooks'
    },
    {
        link:'/admin'
    },
    {
        link:'/auth'
    },
    

        ];
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const loginRouter = require('./src/routes/loginRoutes')(nav)
const signupRouter = require('./src/routes/signupRoutes')(nav)
const adminRouter = require('./src/routes/adminRoutes')(nav)
const authRouter = require('./src/routes/authRoutes')(nav)
const delbooksRouter = require('./src/routes/delbooksRoutes')(nav)
const delauthorsRouter = require('./src/routes/delauthorsRoutes')(nav)


app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use(express.urlencoded({extended:true}));
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/admin',adminRouter);
app.use('/auth',authRouter);
app.use('/delbooks',delbooksRouter);
app.use('/delauthors',delauthorsRouter);


app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library App'
    });
});
app.listen(port,()=>{console.timeLog("Server ready at" + port)});










