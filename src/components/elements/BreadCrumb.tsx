import React, { CSSProperties, HTMLAttributes, useState } from 'react'
import { Typography } from './Typography'
import { Pressable } from './Pressable'
import { colors } from '../../theme'

export interface BreadCrumbItem {
    label: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
}

export interface BreadCrumbProps extends HTMLAttributes<HTMLDivElement> {
    /** Style overrides */
    style?: CSSProperties | undefined
    /**
     * Breadcrumb items collection.  
     * BreadCrumbItem[]  
     * - label: string (required)  
     * - onClick: React.MouseEventHandler<HTMLDivElement> | undefined
     */
    items: BreadCrumbItem[]
}

export const BreadCrumb = ({ style, items, ...props }: BreadCrumbProps) => {

    const [hover, setHover] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)

    return (
        <div
            style={{
                display: 'flex',
                ...style,
            }}
            {...props}
        >
        {
            items && items.length >= 1 ?
                items.map((item, index) => {
                    return (
                        <div key={item.label} style={{ display: 'flex', }}>
                            <Pressable
                                onClick={item.onClick}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                onMouseDown={() => setActive(true)}
                                onMouseUp={() => setActive(false)}
                                style={{
                                    cursor: !item.onClick ? 'default' : 'pointer'
                                }}
                            >
                                <Typography variant={active ? 'breadcrumbLink-pressed' : hover ? 'breadcrumbLink-hover' : 'breadcrumbLink'} >{item.label}</Typography>
                            </Pressable>
                            {
                                index === (items.length - 1) ?
                                    null
                                :
                                    <Typography variant={'breadcrumbLink'} >
                                        <span
                                            style={{
                                                marginLeft: '6px',
                                                marginRight: '6px',
                                                color: colors.gray[30]
                                            }}
                                        >
                                            {'>'}
                                        </span>
                                    </Typography>
                            }
                        </div>
                    )
                })
            :
                null
        }
        </div>
    )

}