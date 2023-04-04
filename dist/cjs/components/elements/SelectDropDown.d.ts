import { MenuItemProps, SelectProps, SelectChangeEvent } from "@mui/material";
import React from "react";
export interface SelectDropDownItemProps extends MenuItemProps {
    /** Value to control the DropDown */
    value?: string | undefined;
    label: string;
    selected?: boolean | undefined;
    disabled?: boolean | undefined;
    onClick?: React.MouseEventHandler<HTMLLIElement> | undefined;
    /** Style overrides */
    style?: React.CSSProperties | undefined;
}
export interface SelectDropDownProps extends SelectProps {
    /**
     * The default selected value if any.
     */
    value?: string | undefined;
    /** Label at the top of the DropDown control */
    label?: string | undefined;
    /**
     * Array of items objects in the menu.
     * Object structure:
     * - value?: string | undefined
     * - label: string
     * - selected: boolean | undefined
     * - disabled: boolean | undefined
     */
    menuItems?: SelectDropDownItemProps[] | undefined;
    /** Disabled state of the component (true or false). */
    disabled?: boolean;
    /** Function to run when changing the value. */
    onChange?: ((event: SelectChangeEvent<any>, child: React.ReactNode) => void) | undefined;
}
export declare const SelectDropDown: ({ menuItems, value, onChange, disabled, label, ...props }: SelectDropDownProps) => JSX.Element;
