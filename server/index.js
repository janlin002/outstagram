import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import postRouter from './routes/posts.js'
import userRouter from './routes/user.js'

const app = express()

app.use(cors())

// 透過 dotenv 讀取 .env 檔案，存到 process.env 裡面
dotenv.config()

// 解析JSON格式 請求大小限制: 30mb
app.use(express.json({limit : "50mb"}));
app.use(bodyParser.json())
app.use(bodyParser.json({limit: "50mb", extended: true}))

// 解析urlencoded格式 請求大小限制: 30mb, 擴展
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}))

app.use('/posts', postRouter)
app.use('/user', userRouter)

app.get('/', (req, res)=>{
    res.send('its work')
})

// const CONNECTION_URL = 'mongodb+srv://outstagram:outstagram@cluster0.huesm.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 6000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
    .catch((error)=> console.error(error.message))