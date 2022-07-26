const express = require('express')
const app = express()

app.use(express.json())

app.use('/', require('./route/postsRoute'))

app.listen(3000, (req,res) => {
    console.log('Server is running on port 3000')
})