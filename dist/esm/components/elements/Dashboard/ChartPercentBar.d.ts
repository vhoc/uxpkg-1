/// <reference types="react" />
export interface ChartPercentBarProps {
    /** Data array */
    data: Record<string, any>[];
    /** Criteria */
    criteria: string;
}
export declare const ChartPercentBar: ({ data, criteria }: ChartPercentBarProps) => JSX.Element;
