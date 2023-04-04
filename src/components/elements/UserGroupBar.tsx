import { IconProp } from "@fortawesome/fontawesome-svg-core"
import React, { HTMLAttributes } from "react"
import { colors } from "../../theme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Typography } from "./Typography"
import { faCircleMinus, faCirclePlus, faUsers, faUser } from "@fortawesome/pro-solid-svg-icons"
import { IconButton } from "./IconButton"

export interface UserGroupBarProps extends HTMLAttributes<HTMLDivElement> {
    /** Whether to show a User or Group item. */
    type: 'user' | 'group'
    /** Name of the user or the group */
    name: string
    /** Optional icon override. Normally it will depend on the 'type' prop */
    leftIcon?: IconProp
    /** Caption, it will be an email if the type prop is 'user', otherwise will be the amount of users that the group contains. */
    caption?: string | undefined
    /** Selected state. It affects the background color. */
    selected?: boolean
    /** Assigned state. It affects the button on the right. */
    assigned?: boolean
    /** Add button function */
    onClickAddButton?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Remove button function */
    onClickRemoveButton?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Style override for the container */
    style?: React.CSSProperties | undefined
    /** Toggle the add/remove button */
    endButton?: boolean
    /** Function to run when clicking on the component. */
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

export const UserGroupBar = ({ type, name, leftIcon, caption, selected = false, assigned = false, onClickAddButton, onClickRemoveButton, style, endButton = true, onClick, }: UserGroupBarProps) => {

    return (
        <div
            style={{
                backgroundColor: selected ? colors.blue[5] : colors.white,
                minWidth: '265px',
                minHeight: '63px',
                paddingTop: '12px',
                paddingBottom: '12px',
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
                onClick={onClick}
                style={{
                    display: 'flex',
                    gap: '8px',
                    cursor: 'pointer',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                    }}
                >
                {
                    type === 'group' ?
                        <FontAwesomeIcon icon={leftIcon || faUsers} color={colors.gray[40]}/>
                    :
                        <FontAwesomeIcon icon={leftIcon || faUser} color={colors.gray[40]}/>
                }
                </div>

                {/** NAME & CAPTION COLUMN with flexGrow ^ */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        alignItems: 'flex-stat'
                    }}
                >
                    <Typography variant={'inputText-typed'}>{name}</Typography>
                    <Typography variant={'breadcrumbLink'}>{caption}</Typography>
                </div>
            </div>
            

            {/** ACTIONBUTTON COLUMN */}
            <div>
            {
                endButton ?
                    <IconButton
                        icon={assigned ? faCircleMinus : faCirclePlus}
                        variant={assigned ? 'gray' : 'grayBlue'}
                        size={'sm'}
                        onClick={assigned ? onClickRemoveButton : onClickAddButton }
                    />
                :
                    null
            }
                
            </div>
            
        </div>
    )

}