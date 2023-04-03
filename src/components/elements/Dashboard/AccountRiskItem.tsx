import React, { HTMLAttributes, useState } from 'react'
import { colors } from '../../../theme'
import { CloudIcon } from '../../graphical/CloudIcon'
import { Typography } from '../Typography'
import { RiskIndicator } from './RiskIndicator'

export interface AccountRiskItemProps extends HTMLAttributes<HTMLDivElement> {
    /** If the element is an AWS, GCP or AZURE. This will set the corresponding icon accordingly*/
    accountProvider?: 'aws' | 'gcp' | 'azure' | undefined
    /** Icon override for the element. It can be of any type */
    icon?: any
    /** The title of the element to be analyzed */
    title: string
    /** Gray text underneath the title */
    caption?: string | undefined
    /** Risk severity */
    riskLevel: 'none' | 'low' | 'medium' | 'high' | 'critical'
    /** Function to run when clicking on the component. */
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
    /** Container style overrides */
    style?: React.CSSProperties | undefined
}

export const AccountRiskItem = ({ accountProvider, icon, title, caption, riskLevel, onClick, style, }: AccountRiskItemProps): JSX.Element => {

    const [hover, setHover] = useState<boolean>(false)

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
                backgroundColor: hover ? '#f6fbff' : colors.white,
                paddingTop: '8px',
                paddingRight: '16px',
                paddingBottom: '8px',
                paddingLeft: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                cursor: 'pointer',
                ...style
            }}
            onClick={onClick}
            onMouseOver={ () => setHover(true) }
            onMouseOut={ () => setHover(false) }
        >

            {/** LEFT PANE (ICON, TITLE, CAPTION) */}
            <div
                style={{
                    display: 'flex',
                    gap: '11px',
                }}
            >
            {
                accountProvider ?
                    <CloudIcon type={selectedType} style={{ width: '18px', height: '18px', }}/>
                :
                    icon ?
                        <div style={{ width: '18px', height: '18px' }}>
                            { icon }
                        </div>
                    :
                        null
            }
                
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1px',
                    }}
                >
                    <Typography variant={'bodySmall-regular'} style={{ color: colors.gray[90] }}>{ title }</Typography>
                    <Typography variant={'bodySmall-regular'} style={{ color: colors.gray[70] }}>{ caption }</Typography>
                </div>

            </div>

            {/** RIGHT PANE (RISK INDICATOR) */}
            <RiskIndicator level={riskLevel}/>
            
        </div>
    )

}