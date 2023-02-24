import { CSSProperties, HTMLAttributes, MouseEventHandler } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'grayBlue' | 'gray' | 'success' | 'danger' | 'warning';
    text: string;
    iconButton?: IconProp;
    style?: CSSProperties | undefined;
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}
export declare const Label: ({ variant, text, iconButton, onClick, style, ...LabelProps }: LabelProps) => JSX.Element;
