import express from 'express'

import { getPosts } from '../controllers/posts.js'

const router = express.Router()

router.post('/', getPosts)

export default router