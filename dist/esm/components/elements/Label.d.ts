import { HTMLAttributes } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'grayBlue' | 'gray' | 'success' | 'danger' | 'warning';
    text: string;
    icon?: IconProp;
    width?: string;
    height?: string;
}
export declare const Label: ({ variant, text, icon, height, width, ...LabelProps }: LabelProps) => JSX.Element;
