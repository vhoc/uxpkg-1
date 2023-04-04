import React from 'react';
import { SelectDropDownItemProps } from './SelectDropDown';
export interface PickListHeadingProps {
    /** Number of existing items in the list */
    title?: string | undefined;
    /** Dropdown of options */
    dropDownItems: SelectDropDownItemProps[];
    /** Dropdown selected value (Controlled component) */
    dropDownValue?: any;
    /** Style overrides */
    style?: React.CSSProperties | undefined;
    /** Toggles the Dropdown control at the end of the heading */
    showDropDown?: boolean;
    /** onChange event function that will be drilled into the internal SimpleDropDown component */
    onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
}
export declare const PickListHeading: ({ title, dropDownItems, dropDownValue, style, showDropDown, onChange }: PickListHeadingProps) => JSX.Element;
