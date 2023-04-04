/// <reference types="react" />
import { IChartItem } from '../../../types';
export interface DonutChartProps {
    /** Text override for the label at the center of the donut. */
    shortTitle: string;
    /**
     * Array of IChartItem
     * -- type: string
     * -- title?: string | undefined
     * -- risk?: string | undefined
     * -- color?: string | undefined
     * -- value: number
     * -- percent: number
     * -- caption?: string | undefined
     */
    data: IChartItem[];
    /** Width of the chart. */
    width?: number | undefined;
    /** Height of the chart. */
    height?: number | undefined;
}
export declare const DonutChart: ({ shortTitle, data, width, height }: DonutChartProps) => JSX.Element;
