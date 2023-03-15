import React, { HTMLAttributes, ReactNode } from "react";
export interface SummaryResourceCardProps extends HTMLAttributes<HTMLDivElement> {
    resourceIcon?: any;
    resourceName: string;
    resourceType: string;
    accountName: string;
    region: string;
    children?: ReactNode | undefined;
    actionButtons?: boolean;
    isEditButtonEnabled: boolean;
    onClickEditButton?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onClickDeleteButton?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    isDeleteButtonEnabled: boolean;
    style?: React.CSSProperties | undefined;
}
export declare const SummaryResourceCard: ({ resourceIcon, resourceName, resourceType, accountName, region, children, actionButtons, isEditButtonEnabled, isDeleteButtonEnabled, onClickEditButton, onClickDeleteButton, style }: SummaryResourceCardProps) => JSX.Element;
