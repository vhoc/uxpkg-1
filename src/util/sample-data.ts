import { IconProp } from "@fortawesome/fontawesome-svg-core"
import {
    faEllipsisV
 } from "@fortawesome/sharp-solid-svg-icons"
 
 export const testAlert = () => {
    alert(`Test function.`)
 }

export interface IDropDownItem {
    icon?: IconProp
    title: string
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