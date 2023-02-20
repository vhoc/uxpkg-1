import React from "react"
import { HTMLAttributes } from "react"
import { colors } from "../../theme"

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    label: string
}

export const Badge = ({ label, ...props }: BadgeProps): JSX.Element => {

    return (
        <span
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '16px',
                height: '16px',
                backgroundColor: '#3267D6',
                color: colors.white,
                fontSize: '12px',
                borderRadius: '100%',
                position: 'absolute',
                top: '0px',
                right: '0px',
                zIndex: '501',
            }}
            {...props}
        >
            {label}
        </span>
    )

}