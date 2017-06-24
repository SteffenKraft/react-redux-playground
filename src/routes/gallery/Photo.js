import React from 'react'
import { Link } from 'react-router-dom'

const Photo = ({ post }) => {    
    return (
        <div>
            <h2>gallery</h2>
            <figure>
                <Link to={`single/${post.code}`}>
                    <img src={post.display_src} alt={post.caption} width="304" height="228" />
                </Link>
            </figure>
            <span>{post.caption} likes: {post.likes}</span>
        </div>
    )
}

export default Photo