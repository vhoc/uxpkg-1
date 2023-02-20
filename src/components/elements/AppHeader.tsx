import React, { HTMLAttributes } from "react";
import { colors } from "../../theme";
import { AppHeaderUserInfo } from "./AppHeaderUserInfo";
import { ImageDropDownButton } from "./ImageDropDownButton";
import { IDropDownItem } from "../../util/sample-data";
import { faBell } from "@fortawesome/sharp-solid-svg-icons";
import { IconButton } from "./IconButton";

export interface AppHeaderProps extends HTMLAttributes<HTMLDivElement>{
    variant?: 'default'
    imgUrl?: string
    userName?: string
    userRole?: string
    dropDownMenuItems?: IDropDownItem[]
    onClickNotificationButton?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const AppHeader = ({variant = 'default', imgUrl, userName, userRole, dropDownMenuItems, onClickNotificationButton, ...props}: AppHeaderProps): JSX.Element => {

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
                <img src={imgUrl}/>
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