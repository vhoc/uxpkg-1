import React, { HTMLAttributes } from "react";
import { IDropDownItem } from '../../util/sample-data';
export interface ResourceCardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'primary';
    accessState: 'access' | 'requested' | 'signIn';
    resourceIcon?: JSX.Element | null;
    bookmarked: boolean;
    onBookmarkClick?: React.MouseEventHandler;
    onMoreInfoClick?: React.MouseEventHandler;
    onAccessClick?: React.MouseEventHandler;
    resourceName: string;
    resourceType: string;
    accountName: string;
    region: string;
    dropDownItems?: IDropDownItem[] | undefined;
    dotMenuItems?: IDropDownItem[] | undefined;
}
export declare const ResourceCard: ({ variant, accessState, resourceIcon, bookmarked, resourceName, resourceType, accountName, region, dropDownItems, dotMenuItems, onBookmarkClick, onMoreInfoClick, onAccessClick, ...props }: ResourceCardProps) => JSX.Element;