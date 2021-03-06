import axios from 'axios'

const postUrl = 'https://outstagram-demo.herokuapp.com/posts'
const userUrl = 'https://outstagram-demo.herokuapp.com/user'

export const fetchPosts = (userId) => axios.post(postUrl, { userID: userId })
export const postComments = (comments) => axios.post(`${postUrl}/comment`, comments)
export const deleteComment = (deleteItem) => axios.delete(`${postUrl}/delete`, { data: deleteItem })
export const postFile = (postItem) => axios.post(`${postUrl}/uploadPost`, postItem)
export const deletePost = (deleteItem) => axios.delete(`${postUrl}/delete-post`, { data: deleteItem })
export const deleteUserPost = (userName) => axios.delete(`${postUrl}/delete-user-post`, { data: userName })

export const updateUserInfo = (changeData) => axios.post(userUrl, changeData)
export const fetchUser = () => axios.get(userUrl)
export const createNewUser = (userInfo) => axios.post(`${userUrl}/new-user`, userInfo)
export const deleteUser = (userName) => axios.delete(`${userUrl}/delete`, { data: userName })
