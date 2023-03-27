import React, { CSSProperties, HTMLAttributes } from "react";
import { IDropDownItem } from '../../util/sample-data';
export interface ResourceCardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'primary';
    /** The access state of the resource displayed in the card */
    accessState: 'access' | 'requested' | 'signIn' | 'waiting';
    /** The resource icon to be displayed at the top left corner of the card */
    resourceIcon?: JSX.Element | null;
    /** Toggle the bookmarked state of the resource */
    bookmarked: boolean;
    /** Whether to display 'Policy' or 'Request' on the access button. */
    forPolicy?: boolean;
    /** Callback function to run when pressing the bookmark icon */
    onBookmarkClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Whether to show the More Info button or not. */
    showMoreInfoButton?: boolean;
    /** Callback function to run when pressing the More Info button */
    onMoreInfoClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Callback function to run when pressing the Access/Policy button */
    onAccessClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** The name of the resource */
    resourceName: string;
    /** The type of the resource */
    resourceType: string;
    /** The account name */
    accountName: string;
    /** The region on which the resource is hosted */
    region: string;
    /** Menu items for the dropdown button at the bottom of the card */
    dropDownItems?: IDropDownItem[] | undefined;
    /** Menu items for the three dot dropdown button */
    dotMenuItems?: IDropDownItem[] | undefined;
    /** Width override */
    width?: string | undefined;
    /** Style overrides */
    style?: CSSProperties | undefined;
}
export declare const ResourceCard: ({ variant, accessState, resourceIcon, bookmarked, forPolicy, resourceName, resourceType, accountName, region, dropDownItems, dotMenuItems, onBookmarkClick, showMoreInfoButton, onMoreInfoClick, onAccessClick, width, style, }: ResourceCardProps) => JSX.Element;
