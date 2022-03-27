import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

type DialogItemType = {
    id: string
    name: string
}
// @ts-ignore
const setActive = ({isActive}) => isActive ? s.activeLink : '';

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} className={setActive}>{props.name}</NavLink>
        </div>
    );
};

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Viktor' id='5'/>
                <DialogItem name='Valera' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your it-kamasutra?'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    );
};