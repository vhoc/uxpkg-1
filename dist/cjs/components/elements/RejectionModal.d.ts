import React, { HTMLAttributes } from 'react';
export interface RejectionModalProps extends HTMLAttributes<HTMLDivElement> {
    /** Title of the modal */
    title?: string | undefined;
    /** Comments */
    comments?: string | undefined;
    /** onCommentsChange event */
    onCommentsChange?: ((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void) | undefined;
    /** onClick Cancel button event */
    onClickCancel?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** onClick Approve button event */
    onClickReject?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Style overrides */
    style?: React.CSSProperties | undefined;
}
export declare const RejectionModal: ({ title, comments, onCommentsChange, onClickCancel, onClickReject, style }: RejectionModalProps) => JSX.Element;
