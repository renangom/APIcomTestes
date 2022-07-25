const express = require('express')
const router = express.Router();
const postService = require('../service/postsService')

router.get('/posts', async (req, res) => {
    const posts = await postService.getPosts();
    res.json(posts)
});



module.exports = router;