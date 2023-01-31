import React, { CSSProperties, HTMLAttributes, ReactNode } from "react"
import { theme } from '../../theme'

export interface ViewProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    radius?: string
    borderColor?: string
    borderWidth?: string
    borderStyle?: string
    padding?: string
    backgroundColor?: string
    width?: string
    height?: string
    display?: string
    flexDirection?: string
}

export const View = ({children, radius = style.view.borderRadius, borderColor, borderWidth, borderStyle, padding = style.view.padding, backgroundColor, width = style.view.width, height = 'auto', display, flexDirection, ...ViewProps}: ViewProps) => {
    return (
        <div
            style={{
                ...style.view,
                borderRadius: radius,
                borderColor: borderColor,
                borderWidth: borderWidth,
                borderStyle: borderStyle,
                padding: padding,
                backgroundColor: backgroundColor,
                width: width,
                height: height,
                display: display,
                flexDirection: flexDirection,
                } as CSSProperties}
                {...ViewProps}
            >
            {children}
        </div>
    )
}

const style = {
    view: {
        ...theme.font.body.regular,
        padding: '16px',
        borderRadius: '4px',
        minWidth: '304px',
        width: '304px',
        display: 'flex',
        flexDirection: 'column',
    }
}