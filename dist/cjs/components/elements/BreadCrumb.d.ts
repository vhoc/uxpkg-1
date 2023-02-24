import React, { CSSProperties, HTMLAttributes } from 'react';
export interface BreadCrumbItem {
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export interface BreadCrumbProps extends HTMLAttributes<HTMLDivElement> {
    /** Style overrides */
    style?: CSSProperties | undefined;
    /**
     * Breadcrumb items collection.
     * BreadCrumbItem[]
     * - label: string (required)
     * - onClick: React.MouseEventHandler<HTMLDivElement> | undefined
     */
    items: BreadCrumbItem[];
}
export declare const BreadCrumb: ({ style, items, ...props }: BreadCrumbProps) => JSX.Element;
