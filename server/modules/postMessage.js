import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    avatar: String,
    userName: String,
    postImage: {
        image: String,
    },
    postContent: [
        {
            name: String,
            content: String
        }
    ]
})

var PostItems = mongoose.model('PostItems', postSchema)

export default PostItems