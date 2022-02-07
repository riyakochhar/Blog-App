const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Post = require('./models/post');
const seedDB = require('./seed');
const methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/blog-post')
.then(()=>{
    console.log("DB Connected");
})
// .catch((err)=>{
//     console.log(err);
// })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));


// seedDB();

app.get('/', (req, res)=>{
   // res.send('home')
   res.redirect('/posts')
})

// Getting all posts from DB
app.get('/posts', async (req,res)=>{
    const posts = await Post.find({});

    res.render('index', {posts});
})

// form to submit new post
app.get('/posts/new', (req, res)=>{
    res.render('new');
})

// create new post in DB
app.post('/posts', async (req, res)=>{
    const {title, author, description} = req.body;

    await Post.create({title, author, description});
    
    res.redirect('/posts')
})

// view certain post
app.get('/posts/:id', async(req,res)=>{
    const {id} = req.params;
    const post = await Post.findById(id);
    res.render('show', {post});
})

// edit post
app.get('/posts/:id/edit', async (req, res)=>{
    const {id} = req.params;
    const post = await Post.findById(id);

    res.render('edit', {post});
})

// Updating the post with given id and payload
app.patch('/posts/:id', async (req, res)=>{

    const {id} = req.params;

    const updatedPost = req.body;

    await Post.findByIdAndUpdate(id, updatedPost);

    res.redirect('/posts')

})

//delete certain post
app.delete('/posts/:id', async (req, res)=>{
    const {id} = req.params;

    await Post.findByIdAndDelete(id);

    res.redirect('/posts')
})

app.listen('3000', ()=>{
    console.log('listening at 3000');
})