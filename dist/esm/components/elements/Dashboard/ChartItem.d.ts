import { HTMLAttributes } from 'react';
export interface ChartItemProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    color?: string | undefined;
    amount: number;
    percent: number;
    caption?: string | undefined;
}
export declare const ChartItem: ({ title, color, amount, percent, caption }: ChartItemProps) => JSX.Element;
