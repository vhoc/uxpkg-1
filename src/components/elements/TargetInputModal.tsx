import { IconButton } from './IconButton'
import { Button } from './Button'
import React, { HTMLAttributes } from 'react'
import { colors } from '../../theme'
import { Typography } from './Typography'
import { faTimes } from '@fortawesome/pro-regular-svg-icons'
import { TextInput } from './TextInput'

export interface TargetInputModalProps extends HTMLAttributes<HTMLDivElement> {
    /** Icon to be shown at the top left corner of the modal */
    icon?: any
    /** Title of the modal */
    title: string
    /** Function to run when clicking on the close button */
    onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Function to run when changing the text in the input */
    onTextInputChange?: ((value: any) => void) | undefined
    /** Function to run the confirm, button */
    onClickConfirm?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Label of the confirm button */
    confirmButtonLabel?: string | undefined
}

export const TargetInputModal = ({ icon, title = 'Confirm', onCloseButtonClick, onTextInputChange, onClickConfirm, confirmButtonLabel = 'OK' }: TargetInputModalProps): JSX.Element => {

    const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        //setCommentsState(event.target.value)
        if (onTextInputChange) {
            onTextInputChange(event.target.value)
        }
    }

    return (
        <div
            style={{
                width: 'fit-content',
                minWidth: '431px',
                height: '134px',
                border: `1px solid ${colors.yellow[50]}`,
                borderRadius: '6px',
                backgroundColor: colors.white,
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '15px',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingBottom: '26px',
                gap: '18px',
            }}
        >

            {/** TOP ROW */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                {/** LEFT SIDE (ICON & TITLE) */}
                <div
                    style={{
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'center',
                    }}
                >
                    {icon} <Typography variant={'title-regular'}>{title}</Typography>
                </div>

                {/** RIGHT SIDE (CLOSE BUTTON) */}
                <IconButton icon={faTimes} variant={'gray'} onClick={onCloseButtonClick} />

            </div>

            {/** BOTTOM ROW */}
            <div
                style={{
                    display: 'flex',
                    gap: '18px',
                }}
            >
                <TextInput
                    placeholder={'Enter Principal'}
                    onChange={handleTextInputChange}
                    sx={{
                        width: '265px',
                    }}
                />
                <Button variant={'primary'} size={'md'} onClick={onClickConfirm}>
                    <Typography variant={'button-sm'} style={{ color: colors.white, }}>
                        {confirmButtonLabel}
                    </Typography>
                </Button>
            </div>

        </div>
    )

}