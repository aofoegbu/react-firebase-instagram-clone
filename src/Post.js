import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';

function Post({ username, imageUrl, caption}) {
    return (
        <div className="post">
            <div className='post__header'>
            <Avatar className="post__avatar" alt="RafehQazi" src="/static/images/avatar/1.jpg" />
            <h3>{username}</h3>
            </div>
            {/* header -> avatar = username */}

            <img className="post__image" src={imageUrl} alt="Post pic" />
            {/* image */}

            <h4 className="post__text"> <strong>{username}</strong> {caption}</h4>
            {/* username + caption */}
        </div>
    )
}

export default Post
