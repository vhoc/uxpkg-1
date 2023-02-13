import { Select, MenuItem, MenuItemProps, FormControl, SelectProps } from "@mui/material";
import React from "react";
//import { styled } from '@mui/system';
import { styled } from '@mui/material/styles';
import { colors } from "../../theme";

interface SelectDropDownItemProps extends MenuItemProps {
    value?: string | undefined
    label: string
    selected: boolean | undefined
    disabled: boolean | undefined
}

interface SelectDropDownProps extends SelectProps {
    /**
     * The default selected value if any.
     */
    value?: string | undefined
    /**
     * Array of items objects in the menu.  
     * Object structure:  
     * - value?: string | undefined
     * - label: string
     * - selected: boolean | undefined
     * - disabled: boolean | undefined
     */
    menuItems: SelectDropDownItemProps[]
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

const SelectDropDown = ({menuItems, value, onChange, disabled = false, ...props}: SelectDropDownProps): JSX.Element => {


    return (
            <FormControl sx={{
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
                        <MyMenuItem value="" disabled={true}>No hay elementos</MyMenuItem>
                }
                </MySelect>
            </FormControl>
    )

}

export default SelectDropDown