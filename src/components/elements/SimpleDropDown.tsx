import React, { HTMLAttributes } from 'react'
import { SelectDropDownItemProps } from './SelectDropDown'
import { styled } from '@mui/material/styles';
import { theme } from '../../theme';

export interface SimpleDropDownProps extends HTMLAttributes<HTMLSelectElement> {
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
    /** On Change event */
    onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
    /** Optional style overrides. */
    style?: React.CSSProperties | undefined
}

export const SimpleDropDown = ({ value, menuItems, disabled, onChange, style }: SimpleDropDownProps): JSX.Element => {

    const MySelect = styled('select')({
        ...theme.font.body.regular,
        backgroundColor: 'transparent',
        paddingRight: '8px',
        '&:focus-visible': {
            outline: 'none',
        },
        ...style,
    })

    return (
        <MySelect
            value={value}
            disabled={disabled}
            onChange={onChange}
        >
        {
            menuItems && menuItems.length >= 1 ?
                menuItems.map((item) => {
                    return (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    )
                })
            :
                null
        }
        </MySelect>
    )

}