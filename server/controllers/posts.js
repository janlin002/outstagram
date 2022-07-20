import express from 'express';
import mongoose from 'mongoose'

import PostItems from "../modules/postMessage.js"

const router = express.Router();

// 拿資料
export const getPosts = async(req, res)=>{
    try{
        const PostItem = await PostItems.find()
        
        res.status(200).json(PostItem)
    }catch(error){
        res.status(404).json({ message: error.message})
    }
}

// 新增留言
export const postComment = async(req, res) =>{
    try{
        const PostItem = await PostItems.find()

        const update = await PostItems.update(
            {
                '_id': req.body.id
            },
            {
                $push:{
                    "postContent": {
                        name: req.body.name,
                        content: req.body.content
                    }
                }
            }
        )


        res.status(200).json(PostItem)
    }catch(error){
        res.status(404).json({ message: error.message})
    }
}

// 刪除留言
export const deleteComment = async(req, res) => {
    try {
        const PostItem = await PostItems.find()

       const deleteItem = await PostItems.update(
        {
            // '_id': req.body._id
        },
        {
            $pull: {
                postContent: {
                    name: req.body.name,
                    content: req.body.content,
                    _id: mongoose.Types.ObjectId(req.body._id)
                }
            }
        }
       )

       res.status(200).json(PostItem)
    }catch(error){
        res.status(404).json({ message: error.message })
    }
}

// 新增檔案
export const uploadPost = async(req, res) => {
    const { avatar, userName, postContent, postImage, postId, info } = req.body

    const newPostItem = new PostItems({ 
        avatar,
        userName, 
        postImage,
        postContent, 
        postId,
        info,
    })

    try{
        await newPostItem.save()

        res.status(201).json(newPostItem);
    }catch(error){
        res.status(404).json({ message: error.message })
    }
}

// 刪除貼文
export const deletePost = async(req, res) => {
    try {
        await PostItems.remove({_id: mongoose.Types.ObjectId(req.body.id)})
        
        res.status(201).json(PostItems);
    }catch(error){
        res.status(404).json({ message: error.message })
    }
}

// 當使用者被刪除後，刪除他所有貼文
export const deleteUserPost = async(req, res) => {

    try {
        await PostItems.remove({
            userName: req.body.name
        })

        res.status(201).json(PostItems);
    }catch(error){
        res.status(404).json({ message: error.message })
    }

}

export default router