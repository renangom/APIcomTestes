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
    res.status(201).json(newPost)
})

router.put('/posts/:id', async (req,res) => {
    const post = req.body;
    try{
        await postService.updatePost(req.params.id, post)
        res.status(204).end();
    }catch(error){
        res.status(404).end();
    }
})

router.delete('/posts/:id', async (req,res) => {
    await postService.deletePost(req.params.id)
    res.status(204).end()
})


module.exports = router;