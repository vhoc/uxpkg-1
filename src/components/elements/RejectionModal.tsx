import React, { HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/pro-solid-svg-icons'
import { colors } from '../../theme'
import { Typography } from './Typography'
import { TextInput } from './TextInput'
import { Button } from './Button'

export interface RejectionModalProps extends HTMLAttributes<HTMLDivElement> {
    /** Title of the modal */
    title?: string | undefined
    /** Comments */
    comments?: string | undefined
    /** onChangeComments event */
    onChangeComments?: ((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void) | undefined
    /** onClick Cancel button event */
    onClickCancel?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** onClick Approve button event */
    onClickReject?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Style overrides */
    style?: React.CSSProperties | undefined
}

export const RejectionModal = ({ title,comments, onChangeComments, onClickCancel, onClickReject, style }: RejectionModalProps): JSX.Element => {

    return (
        <div
            style={{
                width: '584px',
                height: 'auto',
                paddingTop: '31px',
                paddingRight: '31px',
                paddingBottom: '24px',
                paddingLeft: '31px',
                display: 'flex',
                flexDirection: 'column',
                gap: '28px',
                backgroundColor: colors.white,
                borderRadius: '8px',
                boxShadow: '0px 2px 4px rgba(34, 41, 69, 0.37)',
                ...style,
            }}
        >

            {/** ROW 1: ICON & TITLE */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                }}
            >
                <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    color={colors.yellow[50]}
                    style={{
                        backgroundColor: 'rgba(216, 160, 50, 0.1)',
                        borderRadius: '100%',
                        padding: '6px',
                    }}
                />
                <Typography
                    variant={'h4-medium'}
                    style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100%',
                    }}
                >
                    { title }
                </Typography>
            </div>

            {/** ROW 2: COMMENTS */}
            <TextInput
                label={'Add comments'}
                multiline={true}
                rows={2}
                onChange={onChangeComments}
                value={comments}
            />
            
            {/** ROW 3: BUTTONS */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '16px',
                }}
            >
                <Button
                    size="sm"
                    variant="gray"
                    onClick={onClickCancel}
                >
                    Cancel
                </Button>
                <Button
                    size="sm"
                    variant="grayRed"
                    onClick={onClickReject}
                >
                    Reject
                </Button>
            </div>

        </div>
    )

}