import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React, { HTMLAttributes } from 'react'
import { colors } from '../../theme'

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

    return (
        <div
            style={{
                width: '431px',
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
            }}
        >

        </div>
    )

}