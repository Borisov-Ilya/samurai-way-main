import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import React from 'react'

type DialogItemType = {
    id: string | number
    name: string
}
// @ts-ignore
const setActive = ({isActive}) => isActive ? s.activeLink : ''

export const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path} className={setActive}>{props.name}</NavLink>
        </div>
    )
}
