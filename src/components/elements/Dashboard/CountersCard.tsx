import React, { HTMLAttributes, useState, useEffect } from 'react'
import { ICounterItem } from '../../../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Typography } from '../Typography'
import { CounterItem } from './CounterItem'
import { ChartPercentBar } from './ChartPercentBar'
import { colors } from '../../../theme'

export interface CountersCardProps extends HTMLAttributes<HTMLDivElement> {
    /** Type of the Card ('simple' | 'percent-bar') */
    type?: 'simple' | 'percent-bar'
    /** Icon at the top left corner of the card */
    icon?: IconProp | undefined
    /** Criteria name (i.e. 'Users', 'Roles', 'Groups'...) */
    title: string
    /**
     *  Counter items array
     * [
     *      {
     *          element?: (any),
     *          count: (number)
     *      },
     * ]
     */
    counterItems?: ICounterItem[] | undefined
    /** Style overrides */
    style?: React.CSSProperties | undefined
    /** Chart bar data array */
    data?: Record<string, any>[]
    /** Criteria name (i.e. 'Users', 'Roles', 'Groups'...) */
    criteria?: string
}

export const CountersCard = ({ type = 'simple', icon, title, counterItems, data, criteria, style }: CountersCardProps): JSX.Element => {

    const [total, setTotal] = useState<number>(0)
    
    /**
     * Sum the total of the 'count' property for all the items
     * in the counterItems object prop.
     */
    useEffect(() => {
        if ( type === 'simple' && counterItems && counterItems.length >= 1 ) {
            const _sum = counterItems.reduce((accumulator, object) => {
                return accumulator + object.count
            }, 0)
            setTotal(_sum)
        }

        if ( type === 'percent-bar' && data && data.length >= 1 ) {
            const _sum = data.reduce((accumulator, object) => {
                return accumulator + object.value
            }, 0)
            setTotal(_sum)
        }
    }, [counterItems, type, data])

    return (
        <div
            style={{
                width: '250px',
                paddingTop: '12px',
                paddingRight: '16px',
                paddingLeft: '16px',
                paddingBottom: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                //justifyContent: 'space-between',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: 'rgb(216, 221, 228)',
                borderRadius: '4px',
                backgroundColor: colors.white,
                ...style,
            }}
        >
            {/** TOP ROW */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>

                {/** Icon & Title */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', }}>
                    { icon ? <FontAwesomeIcon icon={icon} color={colors.gray[70]}/> : null }
                    <Typography variant={'title-regular'} >{title}</Typography>
                </div>

                {/** Total amount */}
                <Typography variant={'h4-medium'} >{String(total)}</Typography>

            </div>

            {/** BOTTOM ROW */}
            {
                type === 'percent-bar' ?
                    <ChartPercentBar data={data || []} criteria={title || ''} />
                :
                    counterItems && counterItems.length >= 1 ?
                        <div style={{ display: 'flex', flexWrap: 'wrap', }}>
                        {
                            counterItems.map((item, index) => {
                                return (
                                    <CounterItem
                                        key={index}
                                        element={item.element}
                                        count={item.count}
                                        style={{ marginRight: '36px', }}
                                    />
                                )
                            })
                        }
                        </div>
                    :
                        null
            }

        </div>
    )
}