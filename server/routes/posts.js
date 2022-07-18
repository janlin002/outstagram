import express from 'express'

import { 
    getPosts,
    postComment,
    deleteComment,
    uploadPost,
    deletePost
} from '../controllers/posts.js'

const router = express.Router()

router.post('/', getPosts)

router.post('/comment', postComment)

router.delete('/delete', deleteComment)

router.post('/uploadPost', uploadPost)

router.delete('/delete-post', deletePost)

export default router