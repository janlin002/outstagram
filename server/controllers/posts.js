import express from 'express';

import PostItems from "../modules/postMessage.js"

const router = express.Router();

export const getPosts = async(req, res)=>{
    const userid = req.body.userID
    try{
        const PostItem = await PostItems.find() 

        const splitItem = []

        PostItem.map((item)=>{
            if(item.userName !== userid){
                splitItem.push(item)
            }
        })

        res.status(200).json(splitItem)
    }catch(error){
        res.status(404).json({ message: error.message})
    }
}

export default router