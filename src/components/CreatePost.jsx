import { useState, useContext } from "react";
import { SoMeContext } from '../App'


const readStoredPost = () => {
  return ({
    title: localStorage.getItem("title") || "",
    content: localStorage.getItem("content") || ""
  })
}

export default function CreatePost() {
    const { posts, setPosts } = useContext(SoMeContext)
    const [post, setPost] = useState(readStoredPost)

    const handleChange = (e) => {
        const { name, value } = e.target
        setPost({
          ...post,
          [name]: value,
        })
        localStorage.setItem(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPosts([...posts, post])
        localStorage.clear()
        setPost(readStoredPost)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input type="text" name="title" onChange={handleChange} value={post.title}></input>
            </label>
            <br/>
            <label>
              Content:
              <textarea name="content" onChange={handleChange} value={post.content} cols={50} rows={5}></textarea>
            </label>
            <br/>
            <input type="submit" value="Post!"></input>
        </form>
    )
}
