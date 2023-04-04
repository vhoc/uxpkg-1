import React, { HTMLAttributes } from "react";
import { LabelProps } from "./Label";
export interface SummaryResourceCardProps extends HTMLAttributes<HTMLDivElement> {
    /** The icon to be shown at the top left of the card. Free for any type. */
    resourceIcon?: any;
    /** The name of the resource shown. */
    resourceName: string;
    /** The type of the resource. */
    resourceType: string;
    /** The name of the account. */
    accountName: string;
    /** the account region. */
    region: string;
    /** Content of the card (Labels). Only Label children are allowed. */
    children?: React.ReactElement<LabelProps> | Array<React.ReactElement<LabelProps>> | undefined;
    /** Whether to show the action buttons or not. */
    actionButtons?: boolean;
    /** Enables or disables the edit button. */
    isEditButtonEnabled: boolean;
    /** Function to run when clicking on the Edit button. */
    onClickEditButton?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Function to run when clicking on the Delete button. */
    onClickDeleteButton?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Enables or disables the Delete button. */
    isDeleteButtonEnabled: boolean;
    /** Container style overrides. */
    style?: React.CSSProperties | undefined;
}
export declare const SummaryResourceCard: ({ resourceIcon, resourceName, resourceType, accountName, region, children, actionButtons, isEditButtonEnabled, isDeleteButtonEnabled, onClickEditButton, onClickDeleteButton, style }: SummaryResourceCardProps) => JSX.Element;
