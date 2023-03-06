import React, { HTMLAttributes } from "react"
import { FormControlLabel, Checkbox, ThemeProvider } from "@mui/material"
import { colors } from "../../theme"
import { mtheme } from "../../theme"
import { Typography } from "./Typography"
import "@fontsource/ibm-plex-sans"

interface FilterBarItemProps extends HTMLAttributes<HTMLElement> {
    name?: string
    checked?: boolean
    amount?: number
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}


export const FilterBarItem = ({ name = '', checked = false, amount, onClick, ...props }: FilterBarItemProps): JSX.Element => {

    return (
        <div
            style={{
                display: 'flex',
                width: 'fit-content',
            }}
            {...props}
        >
            <ThemeProvider theme={mtheme}>
                <FormControlLabel
                    
                    control={
                        <Checkbox
                            checked={checked}
                            sx={{
                                color: colors.gray[30],
                                fontSize: '14px',
                            }}
                            onClick={ onClick }
                        />
                    }
                    label={ <Typography variant={'body-regular'}>{`${name} ${ amount ? '('+amount+')' : ''}`}</Typography> }
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