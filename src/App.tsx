import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Routes, Route} from 'react-router-dom';
import {DialogType, MessageType, PostType} from './redux/state'

type AppType = {
    state: {
        profilePage: {
            posts: Array<PostType>
        }
        dialogsPage: {
            dialogs: Array<DialogType>
            messages: Array<MessageType>
        }
    }
}

export const App: React.FC<AppType> = ({state}) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs state={state.dialogsPage}/>}/>
                    <Route path='/profile' element={<Profile state={state.profilePage}/>}/>
                </Routes>
            </div>
        </div>
    );
};
