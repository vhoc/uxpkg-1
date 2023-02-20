import React from "react"
import { HTMLAttributes } from "react"
import { colors } from "../../theme"

export interface AppHeaderUserInfoProps extends HTMLAttributes<HTMLDivElement> {
    userName: string
    userRole: string
}

export const AppHeaderUserInfo = ({ userName, userRole, ...props }:AppHeaderUserInfoProps): JSX.Element => {

    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
            backgroundColor: colors.white,
            paddingLeft: '12px',
            paddingRight: '12px',
            maxWidth: '250px',
            width: 'fit-content',
        }}
            {...props}
        >
            <span
                style={{
                    fontSize: '14px',
                    textAlign: 'right',
                    color: '#222945',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%',
                }}
            >
                {userName}
            </span>
            
            <span
                style={{
                    fontSize: '12px',
                    textAlign: 'right',
                    color: '#615E71',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%',
                }}
            >
                {userRole}
            </span>
        </div>
    )

}