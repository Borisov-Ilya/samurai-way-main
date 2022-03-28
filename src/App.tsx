import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Routes, Route} from 'react-router-dom';
import {RootStateType} from './redux/state'

type AppType = {
    state: RootStateType
}

export const App: React.FC<AppType> = ({state}) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs dialogsPage={state.dialogsPage}/>}/>
                    <Route path='/profile' element={<Profile profilePage={state.profilePage}/>}/>
                </Routes>
            </div>
        </div>
    );
};
