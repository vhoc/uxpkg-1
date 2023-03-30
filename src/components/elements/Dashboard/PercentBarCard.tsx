import React, { HTMLAttributes } from 'react'
import { IChartItem } from '../../../types'
import { colors } from '../../../theme'
import { Typography } from '../Typography'
import { ChartPercentBar } from './ChartPercentBar'
import { ChartItem } from './ChartItem'

export interface PercentBarCardProps extends HTMLAttributes<HTMLDivElement> {
    /** The title of the card, it's usually the name of the criteria to be analysed. */
    title: string,
    /** A caption on the top right corner of the card. */
    topRightCaption: string,
    /** Style overrides for the container. */
    style?: React.CSSProperties | undefined
    /** Collection of elements as data input. */
    items: IChartItem[]
}

export const PercentBarCard = ({ title, topRightCaption, items, style, }: PercentBarCardProps): JSX.Element => {

    return (
        <div
            style={{
                minWidth: '666px',
                width: '666px',
                //height: '284px',
                paddingTop: '20px',
                paddingRight: '24px',
                paddingLeft: '24px',
                paddingBottom: '18px',
                display: 'flex',
                flexDirection: 'column',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: 'rgb(216, 221, 228)',
                borderRadius: '4px',
                backgroundColor: colors.white,
                ...style,
            }}
        >

            {/** ROW 1: title & topRightCaption */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography variant={'h4-regular'}>{ title }</Typography>
                <Typography
                    variant={'h4-medium'}
                    style={{
                        color: colors.gray[90],
                        fontSize: '16px'
                    }}
                >
                    { topRightCaption }
                </Typography>
            </div>

            {/** ROW 2: PercentBar */}
            <div
                style={{
                    marginBottom: '57px',
                    height: '79px',
                }}
            >
                <ChartPercentBar
                    maxBarWidth={79}
                    height={109}
                    criteria={'Excessive Permissions'}
                    data={items}
                    legend={false}
                />
            </div>

            {/** ROW 3: ChartItems */}
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    position: 'relative',
                    height: '50%',
                    gap: '15px 58px',
                }}
            >
            {
                items && items.length >= 1 ?
                    items.map((item, index) => {
                        return (
                            <ChartItem
                                key={index}
                                type={'inline'}
                                title={item.risk}
                                color={item.color}
                                amount={item.value}
                                showPercent={false}
                                style={{ width: '266px', }}
                            />
                        )
                    })
                :
                    null
            }
                
            </div>

        </div>
    )

}