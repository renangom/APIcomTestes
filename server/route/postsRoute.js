const express = require('express')
const router = express.Router();
const postService = require('../service/postsService')

router.get('/posts', async (req, res) => {
    const posts = await postService.getPosts();
    res.json(posts)
});

router.post('/posts', async (req,res) => {
    const post = req.body;
    const newPost = await postService.savePost(post)
    res.json(newPost)
})

router.put('/posts/:id', async (req,res) => {
    const post = req.body;
    await postService.updatePost(req.params.id, post)
    res.end();
})

router.delete('/posts/:id', async (req,res) => {
    await postService.deletePost(req.params.id)
    res.end()
})


module.exports = router;