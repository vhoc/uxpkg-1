import React, { HTMLAttributes } from 'react';
import { IChartItem } from '../../../types';
export interface DonutChartCardProps extends HTMLAttributes<HTMLDivElement> {
    /** The title at the top of the card */
    title: string;
    /** A text label to be show at the center of the donut. */
    shortTitle: string;
    /** Container style CSS overrides. */
    style?: React.CSSProperties | undefined;
    /**
     * Array of IChartItem in the card.
     * -- type: string
     * -- title?: string | undefined
     * -- risk?: string | undefined
     * -- color?: string | undefined
     * -- value: number
     * -- percent: number
     * -- caption?: string | undefined
     */
    items: IChartItem[];
}
export declare const DonutChartCard: ({ title, items, shortTitle, style }: DonutChartCardProps) => JSX.Element;
