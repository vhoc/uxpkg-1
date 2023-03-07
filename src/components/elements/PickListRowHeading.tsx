import React from 'react'
import { colors } from '../../theme'
import { Typography } from './Typography'

export interface PickListRowHeadingProps {
    /** Number of existing items in the list */
    title?: string | undefined
    /** Style overrides */
    style?: React.CSSProperties | undefined
    /** Button Function */
    button: 'add' | 'remove'
    /** Callback function to run when clicking the "Add all" button */
    onClickAddAll?: React.MouseEventHandler<HTMLDivElement> | undefined
    /** Callback function to run when clickin the "Remove all" button */
    onClickRemoveAll?: React.MouseEventHandler<HTMLDivElement> | undefined
}

export const PickListRowHeading = ({ title, style, button = 'add', onClickAddAll, onClickRemoveAll }: PickListRowHeadingProps): JSX.Element => {

    return (
        <div
            style={{
                minWidth: 'fit-content',
                //height: '32px',
                backgroundColor: '#f9fbfc',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: colors.gray[20],
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '6px',
                paddingBottom: '6px',
                display: 'flex',
                justifyContent: 'space-between',
                gap: '16px',
                ...style,
            }}
        >
            <Typography variant={'breadcrumbLink'} >{ title }</Typography>
            <Typography
                variant={'breadcrumbLink'}
                onClick={button === 'add' ? onClickAddAll : onClickRemoveAll}
                style={{
                    cursor: 'pointer',
                    color: button === 'add' ? colors.blue[60] : colors.gray[50],
                }}
            >
                { button === 'add' ? 'Add all' : 'Remove all' }
            </Typography>
            
        </div>
    )

}