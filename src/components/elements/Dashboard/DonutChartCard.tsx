import React, { HTMLAttributes } from 'react'
import { colors } from '../../../theme'
import { Typography } from '../Typography'
import { IChartItem } from '../../../types'
import { ChartItem } from './ChartItem'
import { DonutChart } from './DonutChart'

export interface DonutChartCardProps extends HTMLAttributes<HTMLDivElement> {
    /** The title at the top of the card */
    title: string,
    /** A text label to be show at the center of the donut. */
    shortTitle: string,
    /** Container style CSS overrides. */
    style?: React.CSSProperties | undefined
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
    items: IChartItem[]
}

export const DonutChartCard = ({title, items, shortTitle, style}: DonutChartCardProps): JSX.Element => {

    return (
        <div
            style={{
                minWidth: '666px',
                width: '666px',
                paddingTop: '20px',
                paddingRight: '40px',
                paddingLeft: '24px',
                paddingBottom: '31px',
                display: 'flex',
                gap: '70px',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: 'rgb(216, 221, 228)',
                borderRadius: '4px',
                backgroundColor: colors.white,
                ...style,
            }}
        >
            {/** LEFT PANE */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '36px',
                }}
            >
                {/** CARD TITLE */}
                <div>
                    <Typography variant={'h4-regular'} style={{ color: '#545B71', }}>{title}</Typography>
                </div>

                {/** CHART ITEMS CONTAINER */}
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '44px',
                    }}
                >
                {
                    items && items.length >= 1 ?
                        items.map((item, index) => {
                            return (
                                <ChartItem
                                    key={index}
                                    title={item.type}
                                    color={item.color}
                                    amount={item.value}
                                    percent={item.percent}
                                    caption={item.caption}
                                />
                            )
                        })
                    :
                        null
                }
                </div>
            </div>

            {/** RIGHT PANE */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '220px',
                }}
            >
                <DonutChart
                    data={items}
                    width={220}
                    height={220}
                    shortTitle={shortTitle}
                />
            </div>
        </div>
    )

}
