import React from "react"
import { Bar } from "@ant-design/plots"

export interface ChartPercentBarProps {
    /** Data array */
    data: Record<string, any>[]
    /** Criteria */
    criteria: string
}

export const ChartPercentBar = ({ data, criteria }: ChartPercentBarProps) => {

    return (
        <div>
            <Bar
                data={data}
                xField={'value'}
                yField={criteria}
                seriesField={'risk'}
                isPercent={true}
                isStack={true}
                maxBarWidth={4}
                height={36}
                color={['#a8d08d', '#ffe5b0', '#ff9c4a', '#db573f', ]}
                padding={[30, 0, 0, 0,]}
                legend={{
                    layout: 'horizontal',
                    itemSpacing: 5,
                }}
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
                    label: {
                        style: {
                            opacity: 0,
                        }
                    },
                    grid: {
                        line: {
                            style: {
                                lineWidth: 0,
                            }
                        }
                    }
                }}
            />
        </div>
    )
}