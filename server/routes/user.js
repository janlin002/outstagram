import express from 'express'

import { getUser, updateUser } from '../controllers/user.js'

const router = express.Router()

router.get('/', getUser)

router.post('/', updateUser)

export default router