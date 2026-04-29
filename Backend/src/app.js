const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const postModel = require('./models/postModel')
const uploadPost = require('./service/storage')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const upload = multer({storage : multer.memoryStorage()})

app.post('/post', upload.single('image') , async(req, res) => {
    console.log(req.body);
    console.log(req.file);

    const result = await uploadPost(req.file.buffer)

    const post = await postModel.create({
        image : result.url,
        caption : req.body.caption
    })

    res.status(201).json({
        message : 'Post created successfully', post
    })
})

app.get('/post', async(req, res) => {
    const posts = await postModel.find()
    res.status(200).json({
        message : 'post fetched successfully', posts

    })
})

module.exports = app