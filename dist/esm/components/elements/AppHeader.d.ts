import React, { HTMLAttributes } from "react";
import { IDropDownItem } from "../../util/sample-data";
export interface AppHeaderProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default';
    imgUrl?: string;
    userName?: string;
    userRole?: string;
    dropDownMenuItems?: IDropDownItem[];
    onClickNotificationButton?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export declare const AppHeader: ({ variant, imgUrl, userName, userRole, dropDownMenuItems, onClickNotificationButton, ...props }: AppHeaderProps) => JSX.Element;
