import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import React from 'react'

type DialogItemType = {
    id: number
    name: string
}
// @ts-ignore
const setActive = ({isActive}) => isActive ? s.activeLink : ''

export const DialogItem: React.FC<DialogItemType> = ({id, name}) => {
    let path = `/dialogs/${id}`

    return (
        <div className={s.dialog}>
            <NavLink to={path} className={setActive}>{name}</NavLink>
        </div>
    )
}
