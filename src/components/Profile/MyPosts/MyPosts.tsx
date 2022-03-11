import React from 'react';
// @ts-ignore
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message={"Hi, how are you?"} likesCount={30}/>
        <Post message={"It's my first post"} likesCount={15}/>
      </div>
    </div>
  )

}