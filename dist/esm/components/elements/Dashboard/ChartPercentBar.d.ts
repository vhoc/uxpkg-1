/// <reference types="react" />
export interface ChartPercentBarProps {
    /** Data array */
    data: Record<string, any>[];
    /** Criteria */
    criteria: string;
    /** Whether to show the legend labels or not */
    legend?: boolean | undefined;
    /** Maximum bar width (use in conjuction with height) */
    maxBarWidth?: number | undefined;
    /** Height */
    height?: number | undefined;
    /** Interval between bars */
    intervalPadding?: number | undefined;
    /** Margin Top adjustment (Default: -7) */
    marginTop?: string | undefined;
}
export declare const ChartPercentBar: ({ data, legend, maxBarWidth, height, criteria, intervalPadding, marginTop }: ChartPercentBarProps) => JSX.Element;
