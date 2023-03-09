import { CSSProperties, HTMLAttributes, MouseEventHandler } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    /** The variant (color scheme) of the label */
    variant?: 'grayBlue' | 'gray' | 'success' | 'danger' | 'warning';
    /** Optional label text. Leave empty and set iconButton for an icon-only label that can work as a button or not.  */
    text?: string | undefined;
    /** Icon with optional onClick event. If no button functionality is needed, just don't define an onClick property. */
    iconButton?: IconProp;
    /** Icon position. 'start' or 'end'. It defaults to 'start'. Leaving the 'text' prop empty make this prop irrelevant. */
    iconPosition?: 'start' | 'end';
    /** Style overrides */
    style?: CSSProperties | undefined;
    /** onClick function */
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}
export declare const Label: ({ variant, text, iconButton, iconPosition, onClick, style, ...LabelProps }: LabelProps) => JSX.Element;
