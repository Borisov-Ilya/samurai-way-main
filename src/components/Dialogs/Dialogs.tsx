import s from './Dialogs.module.css'
import React from 'react'
import {DialogItem} from './DialogItem/Item'
import {Message} from './Message/Message'
import {DialogsPageType} from '../../redux/state'


type DialogsType = {
    dialogsPage: DialogsPageType
}

export const Dialogs: React.FC<DialogsType> = ({dialogsPage}) => {
    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = dialogsPage.messages.map(m => <Message message={m.message}/>)

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