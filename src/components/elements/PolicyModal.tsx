import React, { HTMLAttributes } from 'react'
import { colors } from '../../theme'
import { Typography } from './Typography'
import { Button } from './Button'
import { faTimes } from '@fortawesome/pro-regular-svg-icons'
import { TabGroup } from './TabGroup'
import { ITab } from '../../types'

export interface PolicyModalProps extends HTMLAttributes<HTMLDivElement> {
    /** The title of the modal */
    title: string
    /** The caption (smaller and gray text below the title) */
    caption: string
    /** Function to run when clicking on the View Full Detail button */
    onClickFullDetail?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Function to run when clicking on the Close button */
    onClickClose?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Style overrides for the modal container */
    style?: React.CSSProperties
    /** Amount of resources in the list */
    resourcesAmount?: number | undefined
    /** Amount of identities in the list */
    identitiesAmount?: number | undefined
    /** The tabs and their contents */
    tabs: ITab[],
}

export const PolicyModal = ({ title, caption, onClickFullDetail, onClickClose, style, tabs, }: PolicyModalProps): JSX.Element => {

    return (
        <div
            style={{
                backgroundColor: colors.white,
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: colors.gray[20],
                borderRadius: '8px',
                width: '626px',
                height: '540px',
                paddingTop: '29px',
                paddingLeft: '32px',
                paddingRight: '32px',
                paddingBottom: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                boxShadow: '3px 6px 12px 3px rgba(0,0,0,0.24)',
                ...style,
            }}
        >

            {/** TOP PARENT */}
            <div
                style={{
                    display: 'flex', justifyContent: 'space-between',
                }}
            >

                {/** TOP LEFT PANE */}
                <div
                    style={{
                        display: 'flex', flexDirection: 'column',
                    }}
                >
                    <Typography variant={'title-regular'}>{ title }</Typography>
                    <Typography variant={'caption-regular'}>{ caption }</Typography>
                </div>

                {/** TOP RIGHT PANE */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '12px',
                    }}
                >
                    <Button
                        size="sm"
                        variant="grayBlue"
                        onClick={onClickFullDetail}
                        >
                        View Full Detail
                    </Button>

                    <Button
                        icon={faTimes}
                        iconPosition="end"
                        size="sm"
                        variant="gray"
                        onClick={onClickClose}
                        >
                        Close
                    </Button>
                </div>

            </div>

            {/** BOTTOM PARENT */}
            <TabGroup
                tabContentHeight="360px"
                tabs={tabs}
            />

        </div>
    )

}