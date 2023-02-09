import React, { HTMLAttributes } from "react"
import { FormControlLabel, Checkbox, ThemeProvider } from "@mui/material"
import { colors } from "../../theme"
import { mtheme } from "../../theme"
import "@fontsource/ibm-plex-sans"

interface FilterBarItemProps extends HTMLAttributes<HTMLDivElement> {
    name?: string
    checked?: boolean
    amount?: number
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}


const FilterBarItem = ({ name = '', checked = false, amount, onClick, ...props }: FilterBarItemProps): JSX.Element => {

    return (
        <div
            style={{
                display: 'flex',
                width: 'fit-content',
            }}
            {...props}
            onClick={ onClick }
        >
            <ThemeProvider theme={mtheme}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            sx={{
                                color: colors.gray[30],
                            }}
                        />
                    }
                    label={ `${name} ${ amount ? '('+amount+')' : ''}` }                
                    sx={{
                        fontFamily: 'IBM Plex Sans !important',
                        fontSize: '14px',
                        fontWeight: 'normal',
                        color: '#232529',
                    }}
                />
            </ThemeProvider>
            
        </div>
    )

}

export default FilterBarItem