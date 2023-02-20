import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { HTMLAttributes, ReactElement } from 'react';
import { ButtonProps } from './Button';
export interface AlertModalProps extends HTMLAttributes<HTMLDivElement> {
    icon?: IconProp;
    title?: string;
    description?: string;
    children?: ReactElement<ButtonProps> | Array<ReactElement<ButtonProps>>;
}
export declare const AlertModal: ({ icon, title, description, children, ...props }: AlertModalProps) => JSX.Element;
