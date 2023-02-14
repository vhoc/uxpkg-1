import { HTMLAttributes, MouseEventHandler } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'grayBlue' | 'gray' | 'success' | 'danger' | 'warning';
    text: string;
    iconButton?: IconProp;
    width?: string;
    height?: string;
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}
export declare const Label: ({ variant, text, iconButton, height, width, onClick, ...LabelProps }: LabelProps) => JSX.Element;
