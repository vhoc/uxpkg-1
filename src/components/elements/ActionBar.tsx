import React, { HTMLAttributes } from "react"
import { colors } from "../../theme"
import { Typography } from "./Typography"
import { faCircleMinus, faCirclePlus, } from "@fortawesome/pro-solid-svg-icons"
import { IconButton } from "./IconButton"

export interface ActionBarProps extends HTMLAttributes<HTMLDivElement> {
    /** Name of the user or the group */
    name: string
    /** Optional icon override. Normally it will depend on the 'type' prop */
    leftIcon?: any
    /** Caption, it will be an email if the type prop is 'user', otherwise will be the amount of users that the group contains. */
    caption?: string | undefined
    /** Selected state. It affects the background color. */
    selected?: boolean
    /** Assigned state. It affects the button on the right. */
    assigned?: boolean
    /** Add button function */
    addButtonOnClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Remove button function */
    removeButtonOnClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Style override for the container */
    style?: React.CSSProperties | undefined
}

export const ActionBar = ({ name, leftIcon, selected = false, assigned = false, addButtonOnClick, removeButtonOnClick, style, }: ActionBarProps) => {

    return (
        <div
            style={{
                backgroundColor: selected ? colors.blue[5] : colors.white,
                minWidth: '265px',
                minHeight: '42px',
                height: '42px',
                paddingTop: '4px',
                paddingBottom: '4px',
                paddingRight: '12px',
                paddingLeft: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                ...style,
            }}
        >

            {/** ICON COLUMN */}
            <div
                style={{
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                {leftIcon}

                {/** NAME & CAPTION COLUMN */}
                <Typography variant={'inputText-typed'}>{name}</Typography>
            </div>
            

            {/** ACTIONBUTTON COLUMN */}
            <div>
                <IconButton
                    //style={{alignSelf: 'start' }}
                    icon={assigned ? faCircleMinus : faCirclePlus}
                    variant={assigned ? 'gray' : 'grayBlue'}
                    size={'sm'}
                    onClick={assigned ? removeButtonOnClick : addButtonOnClick }
                />
            </div>
            
        </div>
    )

}