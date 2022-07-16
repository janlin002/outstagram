import express from 'express';
// import mongoose from "mongoose"

import userInfo from "../modules/userInfo.js"

const router = express.Router();

export const getUser = async(req, res)=>{
    try{
        const userMessages = await userInfo.find() 
        console.log(userMessages, 'userMessages')

        res.status(200).json(userMessages)
    }catch(error){
        res.status(404).json({ message: error.message})
    }
}

export const updateUser = async(req, res) => {
    try{
        const updateItem = req.body
        const userMessages = await userInfo.find() 

        const update = await userInfo.findOneAndUpdate({
            avatar: updateItem.avatar,
            name: userMessages[0].name,
            info: updateItem.info,
            popular: userMessages[0].popular,
            post: userMessages[0].post
        })

        res.status(200).json(update)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export default router