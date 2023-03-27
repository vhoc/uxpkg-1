/// <reference types="react" />
import { IChartItem } from '../../../types';
export interface DonutChartProps {
    shortTitle: string;
    data: IChartItem[];
    width?: number | undefined;
    height?: number | undefined;
}
export declare const DonutChart: ({ shortTitle, data, width, height }: DonutChartProps) => JSX.Element;
