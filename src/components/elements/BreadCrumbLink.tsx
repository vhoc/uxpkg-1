import React, { useState } from 'react'
import { Link } from '@mui/material'
import { Typography } from './Typography'

export interface BreadCrumbLinkProps {
    label: string
    href?: string | undefined
}

export const BreadCrumbLink = ({ label, href }: BreadCrumbLinkProps) => {

    const [hover, setHover] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)
    
    return (
        <Link
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            underline={'none'}
            href={href}
        >
            <Typography variant={active ? 'breadcrumbLink-pressed' : hover ? 'breadcrumbLink-hover' : 'breadcrumbLink'} >{label}</Typography>
        </Link>
    )

}