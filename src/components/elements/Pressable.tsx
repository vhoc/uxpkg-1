import React, { ReactNode, HTMLAttributes } from 'react'

export interface PressableProps extends HTMLAttributes<HTMLButtonElement> {
    /** Function to run when clicking on the component */
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Children to be made 'pressable'. */
    children: ReactNode
    /** CSS Style overrides. */
    style?: React.CSSProperties | undefined
}

export const Pressable = ({ onClick, children, style }: PressableProps) => {
    return (
        <button
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                ...style,
            }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}