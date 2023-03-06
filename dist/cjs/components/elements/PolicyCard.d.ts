import React, { HTMLAttributes } from 'react';
import { IDropDownItem } from '../../util/sample-data';
export interface PolicyCardProps extends HTMLAttributes<HTMLDivElement> {
    /** Name of the Policy */
    policyName: string;
    /** Name of the account */
    accountName: string;
    /** Account number */
    accountNumber: string;
    /** Expiration time left */
    expirationTime?: string | undefined;
    /** Function to run when clicking the Resources button */
    onClickResources?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Function to run when clicking the Identities button */
    onClickIdentities?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Style overrides for the card container */
    style?: React.CSSProperties | undefined;
    /** Resources Amount */
    resourcesAmount?: number;
    /** Identities Amount */
    identitiesAmount?: number;
    /** Items in the drop down menu */
    menuItems?: IDropDownItem[] | undefined;
    /** Width override */
    width?: string | undefined;
}
export declare const PolicyCard: ({ width, policyName, accountName, accountNumber, expirationTime, onClickResources, onClickIdentities, resourcesAmount, identitiesAmount, menuItems, style }: PolicyCardProps) => JSX.Element;
