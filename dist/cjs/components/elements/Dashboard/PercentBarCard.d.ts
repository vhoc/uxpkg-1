import React, { HTMLAttributes } from 'react';
import { IChartItem } from '../../../types';
export interface PercentBarCardProps extends HTMLAttributes<HTMLDivElement> {
    /** The title of the card, it's usually the name of the criteria to be analysed. */
    title: string;
    /** A caption on the top right corner of the card. */
    topRightCaption: string;
    /** Style overrides for the container. */
    style?: React.CSSProperties | undefined;
    /** Collection of elements as data input. */
    items: IChartItem[];
}
export declare const PercentBarCard: ({ title, topRightCaption, items, style, }: PercentBarCardProps) => JSX.Element;
