import React, { ReactNode, HTMLAttributes } from 'react'

export interface PressableProps extends HTMLAttributes<HTMLButtonElement> {
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
    children: ReactNode
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