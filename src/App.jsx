import { useState, createContext } from 'react'
import CreatePost from './components/CreatePost.jsx';
import Header from './components/Header.jsx'
import Posts from './components/Posts.jsx'
import './App.css'


export const SoMeContext = createContext()
const APP_NAME = 'Next-gen Social Media'

function App() {
    const [posts, setPosts] = useState([
        { title: 'Hello, world!', content: 'React context is great :)' },
        { title: 'But...', content: 'It\'s a little confusing at first!' },
    ])

    return (
        <>
        <SoMeContext.Provider
            value={{appName: APP_NAME, posts: posts, setPosts: setPosts}}
        >
            <Header/>
            <CreatePost/>
            <Posts/>
        </SoMeContext.Provider>
        </>
    )
}

export { App }
