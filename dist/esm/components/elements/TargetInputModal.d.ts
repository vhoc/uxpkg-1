import React, { HTMLAttributes } from 'react';
export interface TargetInputModalProps extends HTMLAttributes<HTMLDivElement> {
    /** Icon to be shown at the top left corner of the modal */
    icon?: any;
    /** Title of the modal */
    title: string;
    /** TextInput value */
    textInputValue?: string | undefined;
    /** Function to run when clicking on the close button */
    onClickCloseButton?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Function to run when changing the text in the input */
    onChangeTextInput?: ((value: any) => void) | undefined;
    /** Function to run the confirm, button */
    onClickConfirm?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Label of the confirm button */
    confirmButtonLabel?: string | undefined;
}
export declare const TargetInputModal: ({ icon, title, textInputValue, onClickCloseButton, onChangeTextInput, onClickConfirm, confirmButtonLabel }: TargetInputModalProps) => JSX.Element;
