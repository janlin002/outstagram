import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import postRouter from './routes/posts.js'

const app = express()

app.use(cors())

// 透過 dotenv 讀取 .env 檔案，存到 process.env 裡面
dotenv.config()

app.use('/posts', postRouter)

// 解析JSON格式 請求大小限制: 30mb
app.use(bodyParser.json())
app.use(bodyParser.json({limit: "30mb", extended: true}))

// 解析urlencoded格式 請求大小限制: 30mb, 擴展
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

// const CONNECTION_URL = 'mongodb+srv://outstagram:outstagram@cluster0.huesm.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 6000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
    .catch((error)=> console.error(error.message))