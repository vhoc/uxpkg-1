import { Select, MenuItem, MenuItemProps, FormControl, SelectProps } from "@mui/material";
import { mtheme, colors } from "../../theme";
import React from "react";
import { styled, ThemeProvider } from '@mui/material/styles';
import { Typography } from "./Typography";


export interface SelectDropDownItemProps extends MenuItemProps {
    /** Value to control the DropDown */
    value?: string | undefined
    label: string
    selected?: boolean | undefined
    disabled?: boolean | undefined
    onClick?: React.MouseEventHandler<HTMLLIElement> | undefined
    /** Style overrides */
    style?: React.CSSProperties | undefined
}

export interface SelectDropDownProps extends SelectProps {
    /**
     * The default selected value if any.
     */
    value?: string | undefined
    /** Label at the top of the DropDown control */
    label?: string | undefined
    /**
     * Array of items objects in the menu.  
     * Object structure:  
     * - value?: string | undefined
     * - label: string
     * - selected: boolean | undefined
     * - disabled: boolean | undefined
     */
    menuItems?: SelectDropDownItemProps[] | undefined
    disabled?: boolean
}

const MySelect = styled(Select)({
    backgroundColor: colors.white,
    fontFamily: 'IBM Plex Sans',
    fontSize: '14px',
    color: colors.gray[90],
    borderColor: colors.gray[20],
    height: '40px',
    '&:hover' : {
        backgroundColor: colors.blue[5],
        borderColor: colors.gray[20],
        borderWidth: '0px',
        border: 'none',
    },
    '&:disabled': {
        borderColor: colors.gray[20],
        color: colors.gray[30],
    },
    '&.Mui-focused fieldset' : {
        borderColor: colors.blue[40] + ' !important',
        borderWidth: '1px !important',
        //border: 'inherited',
        boxShadow: 'none',
    },
})

const MyMenuItem = styled(MenuItem)({
    fontFamily: 'IBM Plex Sans',
    fontSize: '14px',
})

export const SelectDropDown = ({menuItems, value, onChange, disabled = false, label, ...props}: SelectDropDownProps): JSX.Element => {


    return (
        
            <FormControl
                sx={{
                    fontFamily: 'IBM Plex Sans',
                    p: 0,
                    height: '40px',
                    '&:hover fieldset' : {
                        borderColor: colors.gray[20] + ' !important',
                        borderWidth: '1px',
                        //border: 'inherited',
                        boxShadow: 'none',
                    },                
                }}
            size={'small'}
            disabled={disabled}
            >
            { label ? <Typography variant={'body-regular'} style={{ marginBottom: '2px' }}>{label}</Typography> : null }
                <ThemeProvider theme={mtheme}>
                <MySelect
                    value={value}
                    onChange={onChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    {...props}
                >
                    <MyMenuItem value="">
                        <em>Select an option...</em>
                    </MyMenuItem>
                {
                    menuItems && menuItems.length >= 1 ?
                        menuItems.map((item, index) => {
                            return (
                                <MyMenuItem key={index} value={item.value} selected={item.selected || false} disabled={item.disabled || false}>{item.label}</MyMenuItem>
                            )
                        })
                    :
                        <MyMenuItem value="" disabled={true}>No elements</MyMenuItem>
                }
                </MySelect>
                </ThemeProvider>
            </FormControl>
    )

}