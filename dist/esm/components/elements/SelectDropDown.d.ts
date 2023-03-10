import { MenuItemProps, SelectProps } from "@mui/material";
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
    disabled?: boolean;
}
export declare const SelectDropDown: ({ menuItems, value, onChange, disabled, label, ...props }: SelectDropDownProps) => JSX.Element;
