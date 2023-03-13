import React, { ReactNode } from "react"
import { Breadcrumbs, SxProps } from "@mui/material"
import { BreadcrumbsProps } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons"
import { colors } from "../../theme"

export interface BreadCrumbsProps extends BreadcrumbsProps {
    /** The content of the Breadcrumbs, These will be BreadCrumbLink component */
    children?: ReactNode | undefined
    /** Classes overrides */    
    classes?: object | undefined
    /** Specifies the maximum number of breadcrumbs to display. When there are more than the maximum number, only the first itemsBeforeCollapse and last itemsAfterCollapse will be shown, with an ellipsis in between. */
    maxItems?: number | undefined
    /** If max items is exceeded, the number of items to show after the ellipsis. */
    itemsAfterCollapse?: number | undefined
    /** If max items is exceeded, the number of items to show before the ellipsis. */
    itemsBeforeCollapse?: number | undefined
    /** Separator component */
    separator?: ReactNode | undefined
    /** MUI's style overrides */
    sx?: SxProps | undefined
}

export const BreadCrumbs = ({children, ...props}: BreadcrumbsProps) => {

    return (
        <Breadcrumbs
            separator={<FontAwesomeIcon icon={faChevronRight} size={'xs'} color={colors.gray[30]} />}
            {...props}
        >
            
            {children}
        </Breadcrumbs>
    )

}