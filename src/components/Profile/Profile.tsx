import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {ProfilePageType} from '../../redux/state'


type ProfileType = {
    profilePage: ProfilePageType
}

export const Profile: React.FC<ProfileType> = ({profilePage}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={profilePage.posts}/>
        </div>
    )
}