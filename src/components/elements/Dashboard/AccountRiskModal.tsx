import React, { HTMLAttributes } from 'react'
import { AccountRiskItemProps } from './AccountRiskItem'
import { Typography } from '../Typography'
import { Button } from '../Button'
import { colors } from '../../../theme'
import { faTimes } from '@fortawesome/pro-regular-svg-icons'
import { styled } from '@mui/material/styles';
import { AccountRiskItem } from './AccountRiskItem'

export interface AccountRiskModalProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Array of AccountRiskItemProps  
     * {  
     * &nbsp;&nbsp;&nbsp;&nbsp; accountProvider?: 'aws' | 'gcp' | 'azure' | undefined  
     * &nbsp;&nbsp;&nbsp;&nbsp; icon?: any  
     * &nbsp;&nbsp;&nbsp;&nbsp; title: string  
     * &nbsp;&nbsp;&nbsp;&nbsp; caption?: string | undefined  
     * &nbsp;&nbsp;&nbsp;&nbsp; riskLevel: 'none' | 'low' | 'medium' | 'high' | 'critical'  
     * &nbsp;&nbsp;&nbsp;&nbsp; onClick?: React.MouseEventHandler<HTMLDivElement> | undefined  
     * &nbsp;&nbsp;&nbsp;&nbsp; style?: React.CSSProperties | undefined  
     * }  
     */
    items: AccountRiskItemProps[]
    /** Function to run when clicking on the Close button */
    onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Container style overrides. */
    style?: React.CSSProperties | undefined
}

export const AccountRiskModal = ({ items, style, onCloseButtonClick, }: AccountRiskModalProps): JSX.Element => {

    const MyDiv = styled('div')({
        overflowY: 'auto',
        '&::-webkit-scrollbar' : {
            width: '4px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: colors.gray[10],
            borderRadius: '3px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: colors.gray[50],
            borderRadius: '3px',
        }
    })

    return (
        <div
            style={{
                width: '626px',
                height: 'fit-content',
                maxHeight: '550px',
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '29px',
                paddingRight: '32px',
                paddingBottom: '16px',
                paddingLeft: '32px',
                backgroundColor: colors.white,
                border: `1px solid ${ colors.gray[20] }`,
                borderRadius: '8px',
                gap: '12px',
                ...style,
            }}
        >

            {/** TOP ROW: TITLE, CAPTION, CLOSE BUTTON */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >

                {/** TOP LEFT: TITLE AND CAPTION */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography variant={'h4-regular'}>Select Account</Typography>
                    <Typography variant={'caption-regular'}>{ `${ String(items.length) } Accounts found` }</Typography>
                </div>

                {/** TOP RIGHT CLOSE BUTTON */}
                <Button variant={'gray'} icon={faTimes} onClick={onCloseButtonClick}>Close</Button>

            </div>

            {/** BOTTOM ROW: ITEMS CONTAINER */}
            <MyDiv
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxHeight: '400px',
                }}
            >
            {
                items && items.length >= 1 ?
                    items.map((item, index) => {
                        return (
                            <AccountRiskItem
                                key={index}
                                accountProvider={item.accountProvider}
                                icon={item.icon}
                                title={item.title}
                                caption={item.caption}
                                riskLevel={item.riskLevel}
                                onClick={item.onClick}
                                style={item.style}
                            />
                        )
                    })
                :
                    null
            }
            </MyDiv>

        </div>
    )

}