import React, { HTMLAttributes, ReactNode } from "react"
import { theme, colors } from "../../theme"

interface FilterBarResourcesProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}


const FilterBarResources = ({ children, ...props }: FilterBarResourcesProps): JSX.Element => {

    return (
        <div
            style={{
                width: '336px',
                height: '100%',
                paddingTop: '28px',
                paddingBottom: '28px',
                paddingLeft: '32px',
                paddingRight: '25px',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: colors.gray[5],
            }}
            {...props}
        >

            <div
                style={{
                    ...theme.font.h2.medium,
                    marginBottom: '24px',
                    color: '#222945',
                }}
            >
                Resource Catalog
            </div>

            <div
                style={{
                    fontFamily: 'IBM Plex Sans',
                    fontSize: '18px',
                    fontWeight: '400',
                    color: '#545B71',
                    marginBottom: '3px'
                }}
            >
                Filters
            </div>

            { children }

        </div>
    )

}

export default FilterBarResources