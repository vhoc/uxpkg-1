import React, { HTMLAttributes } from "react"
import { theme } from "../../theme"
import { FilterBarItemProps } from "./FilterBarItem"

interface FilterBarCategoryProps extends HTMLAttributes<HTMLDivElement> {
    /** The name or label of the category. */
    name?: string
    /** FilterBarItems to be rendered under the category. */
    children?: React.ReactElement<FilterBarItemProps> | Array<React.ReactElement<FilterBarItemProps>> | undefined
}


export const FilterBarCategory = ({ name = '', children, ...props }: FilterBarCategoryProps): JSX.Element => {

    return (
        <div
            style={{
                width: '279px',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '16px',
            }}
            {...props}
        >
            {/** Category Label/Title */}
            <div
                style={{
                    ...theme.font.body.semiBold,
                    textTransform: 'capitalize',
                }}
            >
                { name }
            </div>

            {/** Category Content Items */}
            { children }

        </div>
    )

}