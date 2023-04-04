import React, { CSSProperties, HTMLAttributes } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** Style overrides */
    style?: CSSProperties | undefined;
    /**
     * Requires importing the icon from the parent component. Like so:
     * import { faBookmark } from "@fortawesome/sharp-solid-svg-icons";
     * Then, you would use 'faBookmark' on the icon property when using the component.
     */
    icon: IconProp;
    /** Variant to determine the color scheme of the button. */
    variant: 'primary' | 'tertiary' | 'gray' | 'grayBlue' | 'grayRed' | 'clear';
    /** The disabled/enable state of the button. */
    disabled?: boolean;
    /** Button text color override. */
    textColor?: string;
    /** The size of the button. */
    size?: 'sm';
    /** Override standard sizes' height. */
    height?: string;
    /** Override standard sizes' width. */
    width?: string;
    /** Displays a badge on the button and specifies its content. */
    badge?: string;
    /** Function to run when clicking on the button. */
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export declare const IconButton: ({ style, icon, size, variant, disabled, onClick, textColor, width, height, badge, ...IconButtonProps }: IconButtonProps) => JSX.Element;
