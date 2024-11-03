import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Post from "./Post"
import "./style.css"
import NewPost from './NewPost'

const Posts = () =>{

    return (
        <>
            <diV className="posts">
                <NewPost /> 
                <Post />
                <Post />
            </diV>
        </>
    )
} 

export default Posts;