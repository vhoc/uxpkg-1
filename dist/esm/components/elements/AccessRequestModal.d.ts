import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { SxProps, Theme } from "@mui/material";
import { SelectDropDownItemProps } from "./SelectDropDown";
export interface AccessRequestModalProps {
    /** The state of the request */
    variant: 'queued' | 'submitted';
    /** The number of requests on queue if it applies. */
    requestCount?: number | undefined;
    /** The icon on the left of the message. */
    leftIcon: IconProp;
    /** Text message of the Modal */
    textMessage: string;
    /** Items of the DropDown menu (button available on the 'queued' variant) */
    menuItems?: SelectDropDownItemProps[] | undefined;
    /** Function to be triggered by the "Continue Button" */
    continueButtonOnClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** Styling object */
    sx?: SxProps<Theme> | undefined;
}
declare const AccessRequestModal: ({ variant, requestCount, leftIcon, textMessage, menuItems, continueButtonOnClick, sx, }: AccessRequestModalProps) => JSX.Element;
export default AccessRequestModal;
