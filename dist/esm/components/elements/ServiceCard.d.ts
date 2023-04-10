import React, { CSSProperties, HTMLAttributes } from "react";
import { IDropDownItem } from '../../util/sample-data';
export interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {
    /** The type of the service (it determines the icon) */
    serviceType: 'SERVER_PRIVATE' | 'DATABASE' | 'APPROLE' | 'APPROLE_DYNAMIC';
    /** The access state of the resource displayed in the card */
    accessState: 'access' | 'requested' | 'signIn' | 'waiting';
    /** Overrides the service type icon. */
    customIcon?: any;
    /** Granted state (true or false) */
    isGranted?: boolean;
    /** Policy state (true or false) */
    forPolicy?: boolean;
    /** Function to run when clicking on Policy button. */
    onClickPolicy?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Function to run when clicking on Request button */
    onClickRequest?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Toggle the bookmarked state of the resource */
    bookmarked: boolean;
    /** Callback function to run when pressing the bookmark icon */
    onClickBookmark?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Whether to show the More Info button or not. */
    showMoreInfoButton?: boolean;
    /** Callback function to run when pressing the More Info button */
    onClickMoreInfo?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** The name of the resource */
    resourceName: string;
    /** The type of the resource */
    resourceType: string;
    /** The account name */
    accountName: string;
    /** The region on which the resource is hosted */
    region: string;
    /** Menu items for the three dot dropdown button */
    dotMenuItems?: IDropDownItem[] | undefined;
    /** Width override */
    width?: string | undefined;
    /** Style overrides */
    style?: CSSProperties | undefined;
}
export declare const ServiceCard: ({ serviceType, accessState, customIcon, isGranted, forPolicy, onClickPolicy, onClickRequest, bookmarked, resourceName, resourceType, accountName, region, dotMenuItems, onClickBookmark, showMoreInfoButton, onClickMoreInfo, width, style, }: ServiceCardProps) => JSX.Element;
