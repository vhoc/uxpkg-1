import React, { CSSProperties, HTMLAttributes } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * Requires importing the icon from the parent component. Like so:
     * import { faBookmark } from "@fortawesome/sharp-solid-svg-icons";
     * Then, you would use 'faBookmark' on the icon property when using the component.
     */
    style?: CSSProperties | undefined;
    icon: IconProp;
    variant: 'primary' | 'tertiary' | 'gray' | 'grayBlue' | 'grayRed' | 'clear';
    disabled?: boolean;
    textColor?: string;
    size?: 'sm';
    /** Override standard sizes' height */
    height?: string;
    /** Override standard sizes' width */
    width?: string;
    badge?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export declare const IconButton: ({ style, icon, size, variant, disabled, onClick, textColor, width, height, badge, ...IconButtonProps }: IconButtonProps) => JSX.Element;
export default IconButton;
