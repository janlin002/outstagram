import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userName: String,
    postImage: [
        {
            image: String,
        }
    ],
    postContent: [
        {
            name: String,
            content: String
        }
    ],
    postId: String,
    info: String,
})

var PostItems = mongoose.model('PostItems', postSchema)

export default PostItems