import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { SxProps, Theme } from "@mui/material";
import { SelectDropDownItemProps } from "./SelectDropDown";
export interface SnackBarProps {
    /** Color set */
    variant: 'primary' | 'success' | 'warning' | 'danger';
    /** Icon override to replace the default one defined by the variant. */
    leftIcon: IconProp;
    /** Text message of the Modal */
    textMessage: string;
    /** Whether to show the dropdown button */
    showDropDownButton?: boolean;
    /** Show extra button at the left of the Continue button */
    showExtraButton?: boolean;
    /** Extra button label. Requires the showExtraButton prop to be set to TRUE. */
    extraButtonLabel?: string | undefined;
    /** Function to run when the extra button is clicked. Requires the showExtraButton prop to be set to TRUE. */
    extraButtonOnClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Items of the DropDown menu. Requires showDropDownButton prop to be set to TRUE. */
    menuItems?: SelectDropDownItemProps[] | undefined;
    /** Function to be triggered by the "Continue Button" */
    continueButtonOnClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** Styling object */
    sx?: SxProps<Theme> | undefined;
}
export declare const SnackBar: ({ variant, leftIcon, textMessage, showExtraButton, extraButtonOnClick, extraButtonLabel, menuItems, showDropDownButton, continueButtonOnClick, sx, }: SnackBarProps) => JSX.Element;
