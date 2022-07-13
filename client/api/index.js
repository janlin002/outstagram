import axios from 'axios'

const postUrl = 'http://localhost:2000/posts'
const userUrl = 'http://localhost:2000/user'

export const fetchPosts = () => axios.get(postUrl)
export const fetchUser = () => axios.get(userUrl)
