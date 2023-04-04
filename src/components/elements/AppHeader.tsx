import React, { CSSProperties, HTMLAttributes } from "react";
import { colors } from "../../theme";
import { AppHeaderUserInfo } from "./AppHeaderUserInfo";
import { ImageDropDownButton } from "./ImageDropDownButton";
import { IDropDownItem } from "../../util/sample-data";
import { faBell } from "@fortawesome/sharp-solid-svg-icons";
import { IconButton } from "./IconButton";

export interface AppHeaderProps extends HTMLAttributes<HTMLDivElement>{
    /** Image URL for the logo */
    imgUrl?: string
    /** Styles for the image */
    imgStyle?: CSSProperties | undefined
    /** Username to be shown */
    userName?: string
    /** User's role */
    userRole?: string
    /** User menu items collection */
    dropDownMenuItems?: IDropDownItem[]
    /** Function to be assigned to the notification icon button. */
    onClickNotificationButton?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const AppHeader = ({imgUrl, imgStyle, userName, userRole, dropDownMenuItems, onClickNotificationButton, ...props}: AppHeaderProps): JSX.Element => {

    return (
        <div
            style={{
                width: '100%',
                backgroundColor: colors.white,
                paddingTop: '14px',
                paddingBottom: '14px',
                paddingLeft: '24px',
                paddingRight: '22px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
            {...props}
        >

            {/** Left section */}
            <div>
                <img src={imgUrl} style={imgStyle}/>
            </div>

            {/** Right section */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}
            >
                <AppHeaderUserInfo
                    userName={userName || ''}
                    userRole={userRole || ''}
                />

                <ImageDropDownButton
                    menuItems={dropDownMenuItems}
                />

                <IconButton
                    variant={'clear'}
                    icon={faBell}
                    badge={'2'}
                    onClick={onClickNotificationButton}
                />

            </div>

        </div>
    )

}