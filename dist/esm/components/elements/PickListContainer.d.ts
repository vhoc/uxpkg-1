import React, { HTMLAttributes, ReactNode } from 'react';
export interface PickListContainerProps extends HTMLAttributes<HTMLDivElement> {
    /** Content of the PickListContainer. */
    children?: ReactNode;
    /** CSS Style overrides. */
    style?: React.CSSProperties | undefined;
}
export declare const PickListContainer: ({ children, style, }: PickListContainerProps) => JSX.Element;
