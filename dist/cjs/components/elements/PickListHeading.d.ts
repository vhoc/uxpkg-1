import React, { HTMLAttributes } from 'react';
import { SelectDropDownItemProps } from './SelectDropDown';
export interface PickListHeadingProps extends HTMLAttributes<HTMLDivElement> {
    /** Number of existing items in the list */
    existingCount?: number | undefined;
    /** Dropdown of options */
    dropDownItems: SelectDropDownItemProps[];
    /** Dropdown selected value (Controlled component) */
    dropDownValue?: any;
    /** Style overrides */
    style?: React.CSSProperties | undefined;
}
export declare const PickListHeading: ({ existingCount, dropDownItems, dropDownValue, style }: PickListHeadingProps) => JSX.Element;
