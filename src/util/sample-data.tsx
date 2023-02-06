import { IconProp } from "@fortawesome/fontawesome-svg-core"
import React from "react"
import UserPicture from "../components/elements/UserPicture"
import {
    faEllipsisV
 } from "@fortawesome/sharp-solid-svg-icons"
 
 export const testAlert = () => {
    alert(`Test function.`)
 }

export interface IDropDownItem {
    icon?: IconProp
    title: string | JSX.Element
    style?: object
    submenu?: IDropDownItem[]
    action?: Function | null
 }

 export const menuItems: IDropDownItem[] = [
    {
        //icon: faUserCircle,
        title: `Sign In`,
        submenu: [
            {
                title: 'Option 1',
            },
            {
                title: 'Option 2',
                action: () => alert('Action example'),
            },
            {
                title: 'Option 3',
            },
            
        ],
        action: null,
    },
]

export const menu2Items: IDropDownItem[] = [
    {
        icon: faEllipsisV,
        title: '',
        submenu: [
            {
                title: 'Option 1',
            },
            {
                title: 'Option 2',
                action: () => alert('Action example'),
            },
            {
                title: 'Option 3',
            },
        ]
    }
]

export const menu3Items: IDropDownItem[] = [
    {
        title: <UserPicture src={'https://phantom-elmundo.unidadeditorial.es/563c943e505bf5132d7f6d676c08bfd0/crop/0x0/3000x2000/resize/473/f/webp/assets/multimedia/imagenes/2021/09/22/16323254074650.jpg'} width={32}/>,
        submenu: [
            {
                title: 'Option 1',
            },
            {
                title: 'Option 2',
                action: () => alert('Action example'),
            },
            {
                title: 'Option 3',
            },
        ]
    }
]