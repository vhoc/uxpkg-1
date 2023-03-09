import React, { HTMLAttributes, ReactNode } from 'react';
export interface ScrollableCardProps extends HTMLAttributes<HTMLDivElement> {
    /** Title of the card that will show at the top of it */
    title?: string | undefined;
    /** A string description that will be shown in a fixed section just below the title.` */
    description?: string | undefined;
    /** Scrollable content that can be any component or element. */
    content?: ReactNode | undefined;
    /** Style overrides */
    style?: React.CSSProperties | undefined;
}
export declare const ScrollableCard: ({ title, description, content, style }: ScrollableCardProps) => JSX.Element;
