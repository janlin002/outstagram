import mongoose from "mongoose";

const userInfoSchema = mongoose.Schema({
    name: String,
    avatar: String,
    info: String,
    popular: Boolean,
})

var userInfo = mongoose.model('userInfo', userInfoSchema)

export default userInfo