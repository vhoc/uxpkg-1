import React, { CSSProperties, HTMLAttributes } from "react";
import { IDropDownItem } from "../../util/sample-data";
export interface AppHeaderProps extends HTMLAttributes<HTMLDivElement> {
    /** Image URL for the logo */
    imgUrl?: string;
    /** Styles for the image */
    imgStyle?: CSSProperties | undefined;
    /** Username to be shown */
    userName?: string;
    /** User's role */
    userRole?: string;
    /** User menu items collection */
    dropDownMenuItems?: IDropDownItem[];
    /** Function to be assigned to the notification icon button. */
    onClickNotificationButton?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export declare const AppHeader: ({ imgUrl, imgStyle, userName, userRole, dropDownMenuItems, onClickNotificationButton, ...props }: AppHeaderProps) => JSX.Element;
