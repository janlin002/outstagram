import axios from 'axios'

const postUrl = 'http://localhost:2000/posts'
const userUrl = 'http://localhost:2000/user'

export const fetchPosts = (userId) => axios.post(postUrl, { userID: userId })
export const fetchUser = () => axios.get(userUrl)
