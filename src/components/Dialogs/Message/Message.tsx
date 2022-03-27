import s from './../Dialogs.module.css'
import React from 'react'

type MessageType = {
    message: string
}

export const Message: React.FC<MessageType> = ({message}) => {
    return <div className={s.message}>{message}</div>
}