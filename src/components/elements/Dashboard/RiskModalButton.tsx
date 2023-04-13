import React, { HTMLAttributes } from 'react'
import { Typography } from '../Typography'
import { RiskIndicator } from './RiskIndicator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/pro-regular-svg-icons'
import { colors } from '../../../theme'
import { styled } from '@mui/material'

export interface RiskModalButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** Icon at the left side of the button. Any kind of component.*/
    icon?: any,
    /** Optional style overrides for the icon container. */
    iconContainerStyle?: React.CSSProperties | undefined
    /** Title of the button */
    title: string,
    /** Risk level, it's the same type as the RiskIndicator component variant. */
    riskLevel: 'none' | 'low' | 'medium' | 'high' | 'critical' | 'online' | 'offline',
    /** Callback function to run when clicking on the component */
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Style overrides for the button. */
    style?: React.CSSProperties | undefined
}

export const RiskModalButton = ({ icon, iconContainerStyle, title, riskLevel = 'low', onClick, style }: RiskModalButtonProps): JSX.Element => {

    const MyButton = styled('button')`
        background-color: ${colors.white};
        :hover {
            background-color: ${colors.blue[5]};
        }
        :active {
            background-color: ${colors.blue[10]};
        }
    `
    
    return (
        <MyButton
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: `1px solid ${colors.gray[20]}`,
                borderRadius: '4px',
                paddingTop: '6px',
                paddingRight: '11px',
                paddingBottom: '6px',
                paddingLeft: '11px',
                minWidth: '403px',
                ...style,
            }}
            onClick={onClick}
        >

            {/** LEFT SECTION */}
            <div style={{ display: 'flex', gap: '11px', alignItems: 'center' }}>
                <div style={{
                    width: '18px',
                    height: '18px',
                    ...iconContainerStyle,
                }}>
                {
                    icon ? icon : null
                }
                </div>
                <Typography
                    variant={'body-semiBold'}
                    style={{
                        lineHeight: '0',
                    }}
                >
                    { title }
                </Typography>
            </div>

            {/** RIGHT SECTION */}
            <div
                style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                }}
            >
                <RiskIndicator variant={riskLevel}/>
                <FontAwesomeIcon icon={faBars} />
            </div>

        </MyButton>
    )

}