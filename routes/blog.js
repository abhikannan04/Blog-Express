const express = require('express');
const path = require("path");
const app = express()
const port = 3000;
const router = express.Router();
const blogs = require("../data/blogs.js")

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,"../templates/index.html"))
    res.render('home')
})
router.get('/blog', (req, res) => {

    // res.sendFile(path.join(__dirname, "../views/blogpage.html"))
    res.render('bloghome',
    {
        blogs:blogs
    })
})
router.get('/blogpost/:slug', (req, res) => {
    myblog = blogs.filter((e)=>
    {
        return e.slug == req.params.slug;
    })
        blogs.forEach(e => {
            console.log(e.title);
    });
    // console.log(req.params.slug);
    res.render('blogpage',
    {
        title: myblog[0].title,
        content: myblog[0].content   
    })
})

module.exports = router;