import express from 'express';
// import mongoose from "mongoose"

import PostItems from "../modules/postMessage.js"

const router = express.Router();

export const getPosts = async(req, res)=>{
    try{
        const PostItem = await PostItems.find() 
        console.log(PostItem, 'userMessages')

        res.status(200).json(PostItem)
    }catch(error){
        res.status(404).json({ message: error.message})
    }
}

export default router