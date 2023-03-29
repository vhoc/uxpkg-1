import React from "react"
import { Bar } from "@ant-design/plots"

export interface ChartPercentBarProps {
    /** Data array */
    data: Record<string, any>[]
    /** Criteria */
    criteria: string
    /** Whether to show the legend labels or not */
    legend?: boolean | undefined
    /** Maximum bar width (use in conjuction with height) */
    maxBarWidth?: number | undefined
    /** Height */
    height?: number | undefined
    /** Interval between bars */
    intervalPadding?: number | undefined
}

export const ChartPercentBar = ({ data, legend = true, maxBarWidth = 4, height = 36, criteria, intervalPadding = 0 }: ChartPercentBarProps) => {

    return (
        <div
            style={{
                marginTop: '-7px',
            }}
        >
            <Bar
                autoFit={true}
                data={data}
                xField={'value'}
                yField={criteria}
                seriesField={'risk'}
                isPercent={true}
                isStack={true}
                maxBarWidth={maxBarWidth}
                height={height}
                color={['#a8d08d', '#ffe5b0', '#ff9c4a', '#db573f', ]}
                padding={[30, 0, 0, 0,]}
                legend={ legend ? { layout: 'horizontal', itemSpacing: 5, } : false }
                marginRatio={0}//nope
                intervalPadding={intervalPadding}
                xAxis={{
                    label: {
                        style: {
                            opacity: 0,
                        },
                    },
                    grid: {
                        line: {
                            style: {
                                lineWidth: 0,
                            },
                        },
                    },
                }}
                yAxis={{
                    tickLine: null,//nope
                    subTickLine: null,//nope
                    label: {
                        style: {
                            opacity: 0,
                        }
                    },
                    grid: {
                        line: {
                            style: {
                                lineWidth: 0,
                            },
                        }
                    }
                }}
            />
        </div>
    )
}