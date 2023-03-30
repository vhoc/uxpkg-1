import React, { HTMLAttributes } from 'react';
export interface ChartItemProps extends HTMLAttributes<HTMLDivElement> {
    /** The type of the element card */
    type?: 'block' | 'inline' | string;
    /** The name of the element */
    title?: string | undefined;
    /** The color representing the element */
    color?: string | undefined;
    /** The amount of elements */
    amount: number;
    /** The percentage of elements. Requires showPercent to be set to TRUE. */
    percent?: number | undefined;
    /** Whether to show the percent value or not. Requires percent to be set on a number above 0. */
    showPercent?: boolean | undefined;
    /** An optional caption (Requires type to be set at block) */
    caption?: string | undefined;
    /** Style overrides */
    style?: React.CSSProperties | undefined;
}
export declare const ChartItem: ({ type, title, color, amount, percent, showPercent, caption, style, }: ChartItemProps) => JSX.Element;
