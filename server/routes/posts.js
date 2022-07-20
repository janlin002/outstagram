import express from 'express'

import { 
    getPosts,
    postComment,
    deleteComment,
    uploadPost,
    deletePost,
    deleteUserPost
} from '../controllers/posts.js'

const router = express.Router()

router.post('/', getPosts)

router.post('/comment', postComment)

router.delete('/delete', deleteComment)

router.post('/uploadPost', uploadPost)

router.delete('/delete-post', deletePost)

router.delete('/delete-user-post', deleteUserPost)

export default router