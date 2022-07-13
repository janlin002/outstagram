import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    avatar: String,
    userName: String,
    postImage: {
        image: String,
    },
    like: String,
    postContent: String
})

var PostItems = mongoose.model('PostItems', postSchema)

export default PostItems