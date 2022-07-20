import express from 'express'

import { getUser, updateUser, createNewUser, deleteUser } from '../controllers/user.js'

const router = express.Router()

router.get('/', getUser)

router.post('/', updateUser)

router.post('/new-user', createNewUser)

router.delete('/delete', deleteUser)

export default router