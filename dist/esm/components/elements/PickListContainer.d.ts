import React, { HTMLAttributes, ReactNode } from 'react';
export interface PickListContainerProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    style?: React.CSSProperties | undefined;
}
export declare const PickListContainer: ({ children, style, }: PickListContainerProps) => JSX.Element;
