import { MenuItemProps, SelectProps } from "@mui/material";
import React from "react";
export interface SelectDropDownItemProps extends MenuItemProps {
    value?: string | undefined;
    label: string;
    selected?: boolean | undefined;
    disabled: boolean | undefined;
    onClick?: React.MouseEventHandler<HTMLLIElement> | undefined;
}
interface SelectDropDownProps extends SelectProps {
    /**
     * The default selected value if any.
     */
    value?: string | undefined;
    /**
     * Array of items objects in the menu.
     * Object structure:
     * - value?: string | undefined
     * - label: string
     * - selected: boolean | undefined
     * - disabled: boolean | undefined
     */
    menuItems: SelectDropDownItemProps[];
    disabled?: boolean;
}
declare const SelectDropDown: ({ menuItems, value, onChange, disabled, ...props }: SelectDropDownProps) => JSX.Element;
export default SelectDropDown;
