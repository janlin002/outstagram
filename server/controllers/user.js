import express from 'express';
// import mongoose from "mongoose"

import userInfo from "../modules/userInfo.js"

const router = express.Router();

// 獲取使用者資訊
export const getUser = async(req, res)=>{
    try{
        const userMessages = await userInfo.find() 

        res.status(200).json(userMessages)
    }catch(error){
        res.status(404).json({ message: error.message})
    }
}

// 更新使用者基本資料
export const updateUser = async(req, res) => {
    try{
        const updateItem = req.body
        const userMessages = await userInfo.find() 

        const updateAvatar = Object.keys(updateItem.avatar).length > 0 && updateItem.avatar !== ''

        await userInfo.update(
            {
                'name': updateItem.currentUsers
            },
            {
                avatar: updateAvatar ? updateItem.avatar : userMessages.avatar,
                name: userMessages.name,
                info: updateItem.info !== '' ? updateItem.info : userMessages.info,
                popular: userMessages.popular,
                post: userMessages.post

            }
        )

        res.status(200).json(userMessages)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

// 新增使用者
export const createNewUser = async(req, res) => {
    const { name, avatar, info, popular } = req.body

    const newUser = new userInfo({
        name, avatar, info, popular
    })

    try{
        await newUser.save()

        res.status(201).json(newUser);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

// 刪除使用者
export const deleteUser = async(req, res) => {
    try {
       await userInfo.remove({
        name: req.body.name
       })

       res.status(201).json(userInfo);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export default router