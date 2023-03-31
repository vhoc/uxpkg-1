import React, { HTMLAttributes } from 'react';
export interface TargetInputModalProps extends HTMLAttributes<HTMLDivElement> {
    /** Icon to be shown at the top left corner of the modal */
    icon?: any;
    /** Title of the modal */
    title: string;
    /** Function to run when clicking on the close button */
    onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Function to run when changing the text in the input */
    onTextInputChange?: ((value: any) => void) | undefined;
    /** Function to run the confirm, button */
    onClickConfirm?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Label of the confirm button */
    confirmButtonLabel?: string | undefined;
}
export declare const TargetInputModal: ({ icon, title, onCloseButtonClick, onTextInputChange, onClickConfirm, confirmButtonLabel }: TargetInputModalProps) => JSX.Element;
