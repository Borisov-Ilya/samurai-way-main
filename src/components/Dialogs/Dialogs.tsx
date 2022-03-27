import s from './Dialogs.module.css'
import React from 'react'
import {DialogItem} from './DialogItem/Item'
import {Message} from './Message/Message'
import {MessageType, DialogType} from '../../index'

type DialogsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export const Dialogs: React.FC<DialogsType> = ({dialogs, messages}) => {
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

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