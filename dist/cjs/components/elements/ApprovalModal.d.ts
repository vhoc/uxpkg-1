import React, { HTMLAttributes } from 'react';
import { SelectDropDownItemProps } from './SelectDropDown';
export interface ApprovalModalProps extends HTMLAttributes<HTMLDivElement> {
    /** Title of the modal */
    title?: string | undefined;
    /** Option to auto-approve future requests */
    autoApprove?: boolean;
    /** Comments */
    comments?: string | undefined;
    /** End date value (for auto-aproval) */
    endDateValue?: any;
    /** End date options (SelectDropDownItemProps[]) */
    endDateOptions?: SelectDropDownItemProps[] | undefined;
    /** timeValue interval (for auto-approval) */
    timeValue?: any;
    /** timeValue options (SelectDropDownItemProps[]) */
    timeOptions?: SelectDropDownItemProps[] | undefined;
    /** onCommentsChange event */
    onCommentsChange?: ((value: string) => void) | undefined;
    /** onClick Cancel button event */
    onClickCancel?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** onClick Approve button event */
    onClickApprove?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Style overrides */
    style?: React.CSSProperties | undefined;
    /** autoApprove handler */
    onAutoApproveChange?: (value: boolean) => void | undefined;
}
export declare const ApprovalModal: ({ title, autoApprove, comments, endDateValue, endDateOptions, timeValue, timeOptions, onCommentsChange, onClickCancel, onClickApprove, style, onAutoApproveChange }: ApprovalModalProps) => JSX.Element;
