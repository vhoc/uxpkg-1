import React, { HTMLAttributes } from 'react'
import { Typography } from './Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faBrowser, faUsers } from '@fortawesome/pro-solid-svg-icons'
import { colors } from '../../theme'
import { Button } from './Button'
import { ImageDropDownButton } from './ImageDropDownButton'
import { IDropDownItem } from '../../util/sample-data'

export interface PolicyCardProps extends HTMLAttributes<HTMLDivElement> {
    /** Name of the Policy */
    policyName: string
    /** Name of the account */
    accountName: string
    /** Account number */
    accountNumber: string
    /** Expiration time left */
    expirationTime?: string | undefined
    /** Function to run when clicking the Resources button */
    onClickResources?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Function to run when clicking the Identities button */
    onClickIdentities?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Style overrides for the card container */
    style?: React.CSSProperties | undefined
    /** Resources Amount */
    resourcesAmount?: number
    /** Identities Amount */
    identitiesAmount?: number
    /** Items in the drop down menu */
    menuItems?: IDropDownItem[] | undefined
    /** Width override */
    width?: string | undefined
}

export const PolicyCard = ({ width, policyName, accountName, accountNumber, expirationTime, onClickResources, onClickIdentities, resourcesAmount = 0, identitiesAmount = 0, menuItems, style }: PolicyCardProps): JSX.Element => {

    return (
        <div
            style={{
                paddingTop: '16px',
                paddingBottom: '16px',
                paddingLeft: '24px',
                paddingRight: '16px',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '4px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: colors.gray[20],
                width: width || '240px' ,
                minWidth: '280px',
                maxWidth: width,
                ...style,
            }}
        >
            {/** TOP PARENT ROW */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/** 1. POLICY NAME */}
                <Typography variant={'title-regular'}>{policyName}</Typography>
                {/** 2. ACCOUNT NAME AND NUMBER */}
                <Typography variant={'caption-regular'}>{accountName} / {accountNumber}</Typography>
                {/** 3. CLOCK ICON AND EXPIRATION TIME */}
                <div
                    style={{
                        display: 'flex',
                        marginTop: '24px',
                        marginBottom: '16px',
                        gap: '10px',
                        alignItems: 'center',
                    }}
                >
                    <FontAwesomeIcon icon={faClock} color={colors.gray[70]}/>
                    <Typography
                        variant={'body-regular'}
                    >
                        {expirationTime}
                    </Typography>
                </div>

            </div>

            {/** BOTTOM PARENT ROW */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                {/** LEFT */}
                <div
                    style={{
                        display: 'flex',
                        gap: '4px'
                    }}
                >
                    <Button
                        icon={faBrowser}
                        iconColor="#A6ABB6"
                        iconPosition="start"
                        size="sm"
                        variant="grayBlue"
                        onClick={onClickResources}
                        >
                        { resourcesAmount.toString() }
                    </Button>
                    <Button
                        icon={faUsers}
                        iconColor="#A6ABB6"
                        iconPosition="start"
                        size="sm"
                        variant="grayBlue"
                        onClick={onClickIdentities}
                        >
                        { identitiesAmount.toString() }
                    </Button>
                </div>

                {/** RIGHT */}
                <ImageDropDownButton
                    menuItems={menuItems}
                    mode="icon"
                    size="sm"
                    variant="gray"
                    hasDownArrow={false}
                />

            </div>

        </div>
    )

}