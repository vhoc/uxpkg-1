import React, { HTMLAttributes } from 'react'
import { ResourceAccountRiskMeterProps } from './ResourceAccountRiskMeter'
import { colors } from '../../../theme'
import { Typography } from '../Typography'
import { ResourceAccountRiskMeter } from './ResourceAccountRiskMeter'

export interface TopAccountsRiskCardProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Array of **ResourceAccountRiskMeterProps**  
     * {  
     * &nbsp;&nbsp;&nbsp;&nbsp; accountProvider?: 'aws' | 'gcp' | 'azure' | undefined  
     * &nbsp;&nbsp;&nbsp;&nbsp; icon?: any  
     * &nbsp;&nbsp;&nbsp;&nbsp; title: string  
     * &nbsp;&nbsp;&nbsp;&nbsp; compliantUserPercentage: number  
     * &nbsp;&nbsp;&nbsp;&nbsp; lowRiskUserPercentage: number  
     * &nbsp;&nbsp;&nbsp;&nbsp; mediumRiskUserPercentage: number  
     * &nbsp;&nbsp;&nbsp;&nbsp; highRiskUserPercentage: number  
     * &nbsp;&nbsp;&nbsp;&nbsp; criticalRiskUserPercentage: number  
     * &nbsp;&nbsp;&nbsp;&nbsp; style?: React.CSSProperties | undefined  
     * }  
     */
    items: ResourceAccountRiskMeterProps[]
    /** Container style overrides */
    style?: React.CSSProperties | undefined
}

export const TopAccountsRiskCard = ({ items, style }: TopAccountsRiskCardProps): JSX.Element => {

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: colors.white,
                paddingTop: '20px',
                paddingRight: '24px',
                paddingBottom: '33px',
                paddingLeft: '24px',
                gap: '32px',
                width: '666px',
                border: `solid 1px ${ colors.gray[20] }`,
                borderRadius: '4px',
                ...style,
            }}
        >

            {/** TOW ROW: TITLE */}
            <Typography variant={'h4-regular'}>Top Accounts At Risk</Typography>

            {/** BOTTOM ROW: ITEMS CONTAINER */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    gap: '16px 30px',
                }}
            >
            {
                items && items.length >= 1 ?
                    items.map((item,  index) => {
                        return (
                            <ResourceAccountRiskMeter
                                key={index}
                                title={item.title}
                                accountProvider={item.accountProvider}
                                icon={item.icon}
                                compliantUserPercentage={item.compliantUserPercentage}
                                lowRiskUserPercentage={item.lowRiskUserPercentage}
                                mediumRiskUserPercentage={item.mediumRiskUserPercentage}
                                highRiskUserPercentage={item.highRiskUserPercentage}
                                criticalRiskUserPercentage={item.criticalRiskUserPercentage}
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