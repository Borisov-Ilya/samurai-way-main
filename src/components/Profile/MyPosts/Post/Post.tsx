import React from 'react'
import s from './Post.module.css'

type PostType = {
    message: string
    likesCount: number
}

export const Post: React.FC<PostType> = ({message, likesCount}) => {
    return (
        <div className={s.dialog}>
            <img src='https://s0.tchkcdn.com/i/1/1/80937_1802c6cf_1260804286_avatar_1940.jpg' alt='avatar'/>
            {message}
            <div>
                <span>like</span> {likesCount}
            </div>
        </div>
    )
}