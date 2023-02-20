import React, { HTMLAttributes, ReactNode } from "react";
export interface SummaryResourceCardProps extends HTMLAttributes<HTMLDivElement> {
    resourceIcon?: any;
    resourceName: string;
    resourceType: string;
    accountName: string;
    region: string;
    children?: ReactNode | undefined;
    isEditButtonEnabled: boolean;
    onClickEditButton?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onClickDeleteButton?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    isDeleteButtonEnabled: boolean;
}
export declare const SummaryResourceCard: ({ resourceIcon, resourceName, resourceType, accountName, region, children, isEditButtonEnabled, isDeleteButtonEnabled, onClickEditButton, onClickDeleteButton, ...props }: SummaryResourceCardProps) => JSX.Element;
