import React, { HTMLAttributes } from 'react';
import { IChartItem } from '../../../types';
export interface DonutChartCardProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    shortTitle: string;
    style?: React.CSSProperties | undefined;
    items: IChartItem[];
}
export declare const DonutChartCard: ({ title, items, shortTitle, style }: DonutChartCardProps) => JSX.Element;
