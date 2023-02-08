import React, { HTMLAttributes, ReactNode } from "react"
import { theme } from "../../theme"

interface FilterBarCategoryProps extends HTMLAttributes<HTMLDivElement> {
    name?: string
    children: ReactNode
}


const FilterBarCategory = ({ name = '', children, ...props }: FilterBarCategoryProps): JSX.Element => {

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

export default FilterBarCategory