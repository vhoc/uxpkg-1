import React, { HTMLAttributes } from 'react'
import { CloudIcon } from '../../graphical/CloudIcon'
import { Typography } from '../Typography'
import { ChartPercentBar } from './ChartPercentBar'
import { colors } from '../../../theme'

export interface ResourceAccountRiskMeterProps extends HTMLAttributes<HTMLDivElement> {
    /** If the element is an AWS, GCP or AZURE. This will set the corresponding icon accordingly*/
    accountProvider?: 'aws' | 'gcp' | 'azure' | undefined
    /** Icon override for the element. It can be of any type */
    icon?: any
    /** The title of the element to be analyzed */
    title: string
    /** Percentage of users that are in compliance to the security policies. */
    compliantUserPercentage: number
    /** Percentage of users that exceed their required privileges at LOW leveL */
    lowRiskUserPercentage: number
    /** Percentage of users that exceed their required privileges at MEDIUM level */
    mediumRiskUserPercentage: number
    /** Percentage of users that exceed their required privileges at HIGH level */
    highRiskUserPercentage: number
    /** Percentage of users that exceed their required privileges at CRITICAL level */
    criticalRiskUserPercentage: number
    /** Container style overrides */
    style?: React.CSSProperties | undefined
}

export const ResourceAccountRiskMeter = ({ icon, accountProvider, title, compliantUserPercentage, lowRiskUserPercentage, mediumRiskUserPercentage, highRiskUserPercentage, criticalRiskUserPercentage, style, }: ResourceAccountRiskMeterProps): JSX.Element => {

    const iconOptions = {
        aws: 'aws',
        gcp: 'gcp',
        azure: 'gcp',
    }

    type TypeKey = keyof typeof iconOptions
    const selectedType = accountProvider as TypeKey
    
    return (
        <div
            style={{
                width: '290px',
                minWidth: '290px',
                display: 'flex',
                gap: '12px',
                ...style,
            }}
        >

            {/** LEFT SIDE (ICON) */}
            {
            accountProvider ?
            <div
                style={{
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: `1px solid ${colors.gray[20]}`,
                    borderRadius: '2px',
                }}
            >                
                <CloudIcon type={selectedType} style={{ width: '18px', height: '18px', }}/>
            </div>
            :
                icon ?
                    <div style={{ width: '32px', height: '32px' }}>
                        { icon }
                    </div>
                :
                    null
            }

            {/** RIGHT SIDE (TITLE, BAR) */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    width: '80%',
                }}
            >
                {/** Title & Percentage container */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                    }}
                >
                    <Typography
                        variant={'body-regular'}
                        style={{
                            marginTop: '4px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '100%',
                        }}
                    >
                            { title }
                    </Typography>
                    <Typography variant={'body-semiBold'}>{ `${ String(compliantUserPercentage || 0) }%`}</Typography>
                </div>

                {/** Bar meter */}
                <div>
                    <ChartPercentBar
                        legend={false}
                        //maxBarWidth={79}
                        //height={109}
                        criteria={'Users'}
                        marginTop={'-36px'}
                        data={[
                            {// COMPLIANT
                                risk: 'Compliant',
                                'Users': 'Users',
                                value: compliantUserPercentage,
                                color: 'rgb(201, 206, 215)'
                            },
                            {// LOW
                                risk: 'Low Risk',
                                'Users': 'Users',
                                value: lowRiskUserPercentage,
                                color: '#a8d08d',
                            },
                            {// MEDIUM
                                risk: 'Medium Risk',
                                'Users': 'Users',
                                value: mediumRiskUserPercentage,
                                color: '#ffe5b0',
                            },
                            {// HIGH
                                risk: 'High Risk',
                                'Users': 'Users',
                                value: highRiskUserPercentage,
                                color: '#ff9c4a',
                            },
                            {// CRITICAL
                                risk: 'Critial Risk',
                                'Users': 'Users',
                                value: criticalRiskUserPercentage,
                                color: '#db573f',
                            },
                        ]}
                    />
                </div>

            </div>


        </div>
    )

}