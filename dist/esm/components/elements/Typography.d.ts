import { CSSProperties, HTMLAttributes } from "react";
import { ReactNode } from "react";
export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
    /** ReactNode children or a text string */
    children: ReactNode | string;
    /** The font styles variant */
    variant: 'body-regular' | 'body-semiBold' | 'bodySmall-regular' | 'breadcrumbLink' | 'breadcrumbLink-hover' | 'breadcrumbLink-pressed' | 'buttonLabel-regular' | 'buttonLabel-medium' | 'caption-regular' | 'h2' | 'h3' | 'h4' | 'inputText-hint' | 'inputText-typed' | 'title-regular';
    /** Style override if needed. */
    style?: CSSProperties | undefined;
}
export declare const Typography: ({ children, variant, style, ...props }: TypographyProps) => JSX.Element;
