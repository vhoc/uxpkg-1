import React from 'react';
import { PaginatorProps } from './Paginator';
export interface PaginationBarProps extends PaginatorProps {
    /** Text string at the left side of the paginator. */
    caption?: string | undefined;
    /** Place for the paginator component. */
    children?: React.ReactElement<PaginatorProps> | undefined;
    /** Container style overrides.*/
    style?: React.CSSProperties | undefined;
}
export declare const PaginationBar: ({ caption, children, style }: PaginationBarProps) => JSX.Element;
