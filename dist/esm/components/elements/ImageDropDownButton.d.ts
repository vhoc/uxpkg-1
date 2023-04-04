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
    /** Variant to specify the color scheme of the button. */
    variant?: 'clear' | 'gray';
    /** The disabled/enable state of the button. */
    disabled?: boolean;
    /** Size of the button. Currently only 'sm' is supported. */
    size?: 'sm';
    /** Height override for the button. */
    height?: string;
    /** Whether to show the down arrow or not. */
    hasDownArrow?: boolean;
    /** Adapts the component for use with an image or a FontAwesomeIcon. */
    mode?: 'image' | 'icon';
}
/** A Navigation bar with a multilevel dynamic dropdown menu. */
export declare const ImageDropDownButton: ({ menuItems, variant, size, height, disabled, hasDownArrow, mode, }: ImageDropDownButtonProps) => JSX.Element;
