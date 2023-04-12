import React, { CSSProperties, HTMLAttributes } from "react";
import { ReactNode } from "react";
export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
    /** ReactNode children or a text string */
    children: ReactNode | string;
    /** The font styles variant */
    variant: 'body-regular' | 'body-semiBold' | 'bodySmall-regular' | 'breadcrumbLink' | 'breadcrumbLink-hover' | 'breadcrumbLink-pressed' | 'buttonLabel-regular' | 'buttonLabel-medium' | 'caption-regular' | 'h2' | 'h3' | 'h4-regular' | 'h4-medium' | 'inputText-hint' | 'inputText-typed' | 'title-regular' | 'button-sm';
    /** Class name(s) */
    className?: string | undefined;
    /** Style override if needed. */
    style?: CSSProperties | undefined;
    /** Callback function to run when clicking on the component. */
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}
export declare const Typography: ({ children, variant, className, style, onClick }: TypographyProps) => JSX.Element;
