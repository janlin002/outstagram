import mongoose from "mongoose";

const userInfoSchema = mongoose.Schema({
    name: String,
    avatar: String,
    info: String,
    popular: Boolean,
    post: [
        {
            image: [
                {
                    image: String,
                    id: String,
                }
            ],
            id: String,
            content: String,
            like: String,
            comment: [
                {
                    name: String,
                    content: String
                }
            ]
        }
    ],

})

var userInfo = mongoose.model('userInfo', userInfoSchema)

export default userInfo