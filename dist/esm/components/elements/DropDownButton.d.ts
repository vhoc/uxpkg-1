import { HTMLAttributes } from 'react';
import { IDropDownItem } from '../../util/sample-data';
export interface DropDownButtonProps extends HTMLAttributes<HTMLUListElement> {
    /** Array of objects with the following scructure:
     * [{ icon?, title, style?, action?, submenu?  }]
     * - icon: [Optional], Type: IconDefinition (FontAwesome)
     * - title: [Mandatory], Type: string
     * - style: [Optional], Type: object
     * - action: [Optional], Type: Function
     * - submenu: [Optional], Properties[] (Recursive)
     */
    menuItems?: IDropDownItem[];
    variant?: 'primary' | 'gray' | 'grayBlue' | 'grayRed' | 'clear';
    disabled?: boolean;
    size?: 'sm';
    height?: string;
    hasDownArrow?: boolean;
}
/** A Navigation bar with a multilevel dynamic dropdown menu. */
export declare const DropDownButton: ({ menuItems, variant, size, height, disabled, hasDownArrow, ...DropDownButtonProps }: DropDownButtonProps) => JSX.Element;
