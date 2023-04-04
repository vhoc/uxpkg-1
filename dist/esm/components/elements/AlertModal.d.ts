import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { HTMLAttributes, ReactElement } from 'react';
import { ButtonProps } from './Button';
export interface AlertModalProps extends HTMLAttributes<HTMLDivElement> {
    /** FontAwesome v6 Icon (IconProp). */
    icon?: IconProp;
    /** The title at the top of the modal. */
    title?: string;
    /** The text in the main container of the component. */
    description?: string;
    /** React Elements of the Button type only. */
    children?: ReactElement<ButtonProps> | Array<ReactElement<ButtonProps>>;
}
export declare const AlertModal: ({ icon, title, description, children, ...props }: AlertModalProps) => JSX.Element;
