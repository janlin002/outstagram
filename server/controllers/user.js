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

export default router