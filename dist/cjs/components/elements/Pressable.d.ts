import React, { ReactNode, HTMLAttributes } from 'react';
export interface PressableProps extends HTMLAttributes<HTMLButtonElement> {
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
    children: ReactNode;
    style?: React.CSSProperties | undefined;
}
export declare const Pressable: ({ onClick, children, style }: PressableProps) => JSX.Element;
