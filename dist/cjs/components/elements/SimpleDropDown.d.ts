import React, { HTMLAttributes } from 'react';
import { SelectDropDownItemProps } from './SelectDropDown';
export interface SimpleDropDownProps extends HTMLAttributes<HTMLSelectElement> {
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
    /** On Change event */
    onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}
export declare const SimpleDropDown: ({ value, menuItems, disabled, onChange }: SimpleDropDownProps) => JSX.Element;
