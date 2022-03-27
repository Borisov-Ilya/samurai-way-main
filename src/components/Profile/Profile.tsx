import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType} from '../../redux/state'


type ProfileType = {
    state: {
        posts: Array<PostType>
    }
}

export const Profile: React.FC<ProfileType> = ({state}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts}/>
        </div>
    );
};