import { HTMLAttributes } from 'react';
import { IDropDownItem } from '../../util/sample-data';
export interface ImageDropDownButtonProps extends HTMLAttributes<HTMLUListElement> {
    /** Array of objects with the following scructure:
     * [{ icon?, title, style?, action?, submenu?  }]
     * - icon: [Optional], Type: IconDefinition (FontAwesome)
     * - title: [Mandatory], Type: string
     * - style: [Optional], Type: object
     * - action: [Optional], Type: Function
     * - submenu: [Optional], Properties[] (Recursive)
     */
    menuItems?: IDropDownItem[];
    variant?: 'clear';
    disabled?: boolean;
    size?: 'sm';
    height?: string;
    hasDownArrow?: boolean;
}
/** A Navigation bar with a multilevel dynamic dropdown menu. */
export declare const ImageDropDownButton: ({ menuItems, variant, size, height, disabled, hasDownArrow, ...ImageDropDownButtonProps }: ImageDropDownButtonProps) => JSX.Element;
