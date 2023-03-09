import React, { HTMLAttributes } from 'react';
export interface PageButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** Number of the page in the button */
    pageNumber: number;
    /** onClick event function */
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Style overrides */
    style?: React.CSSProperties | undefined;
    /** Selected state (for current page) */
    selected: boolean;
}
export declare const PageButton: ({ pageNumber, onClick, style, selected }: PageButtonProps) => JSX.Element;
