import React, { HTMLAttributes } from 'react'
import { Typography } from '../Typography'
import { colors } from '../../../theme'

export interface ChartItemProps extends HTMLAttributes<HTMLDivElement> {
    /** The type of the element card */
    type?: 'block' | 'inline' | string
    /** The name of the element */
    title?: string | undefined
    /** The color representing the element */
    color?: string | undefined
    /** The amount of elements */
    amount: number
    /** The percentage of elements. Requires showPercent to be set to TRUE. */
    percent?: number | undefined
    /** Whether to show the percent value or not. Requires percent to be set on a number above 0. */
    showPercent?: boolean | undefined
    /** An optional caption (Requires type to be set at block) */
    caption?: string | undefined
    /** Style overrides */
    style?: React.CSSProperties | undefined
}

export const ChartItem = ({ type = 'block', title, color, amount, percent, showPercent = true, caption, style, }: ChartItemProps): JSX.Element => {

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: type === 'inline' ? 'space-between' : 'default',
                gap: '10px',
                alignItems: type === 'block' ? 'unset' : 'center',
                ...style,
            }}
        >

            {/** LEFT PANE */}
            <div
                style={{
                    display: type === 'inline' ? 'flex' : 'unset',
                    gap: type === 'inline' ? '10px' : 'unset',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{    
                        width: '16px',
                        height: '16px',
                        backgroundColor: color,
                        borderRadius: '4px',
                        alignItems: type === 'inline' ? 'center' : 'flex-start'
                    }}
                >
                </div>
            {
                type === 'inline' ?
                    <Typography
                        variant={ type === 'inline' ? 'body-regular' : 'body-semiBold' }
                        color={colors.gray[90]}
                        style={{
                            lineHeight: '2px',
                        }}
                    >
                        {title}
                    </Typography>
                :
                    null
            }
            </div>

            {/** RIGHT PANE */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: type === 'block' ? 'column' : 'row',
                    alignItems: type === 'block' ? 'unset' : 'center',
                }}
            >
            {
                type === 'block' ?
                    <Typography
                        variant={ 'body-semiBold' }
                        color={colors.gray[90]}
                        style={{
                            lineHeight: 'unset',
                            verticalAlign: 'center',
                        }}
                    >
                        {title}
                    </Typography>
                :
                    null
            }
                

                <Typography
                    variant={ type === 'inline' ? 'body-semiBold' : 'h4-medium' }
                    style={{
                        alignItems: 'center',
                        lineHeight: 'unset',
                    }}
                >
                    {String(amount)}
                    {
                        showPercent && percent ?
                            '(' + String(percent) + ')%'
                        :
                            null
                    }
                </Typography>

                {
                    type === 'block' ?
                        <Typography
                            variant={'caption-regular'}
                        >
                            {caption}
                        </Typography>
                    :
                        null
                }
            </div>

        </div>
    )

}