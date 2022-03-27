import s from './Dialogs.module.css'
import React from 'react'
import {DialogItem} from './DialogItem/Item'
import {Message} from './Message/Message'
import {DialogType, MessageType} from '../../redux/state'


type DialogsType = {
    state: {
        dialogs: Array<DialogType>
        messages: Array<MessageType>
    }
}

export const Dialogs: React.FC<DialogsType> = ({state}) => {
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}