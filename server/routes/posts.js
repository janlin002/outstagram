import express from 'express'

import { getPosts, postComment, deleteComment } from '../controllers/posts.js'

const router = express.Router()

router.post('/', getPosts)

router.post('/comment', postComment)

router.delete('/delete', deleteComment)

export default router