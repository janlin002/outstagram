import express from 'express'

import { getUser, updateUser, createNewUser } from '../controllers/user.js'

const router = express.Router()

router.get('/', getUser)

router.post('/', updateUser)

router.post('/new-user', createNewUser)

export default router