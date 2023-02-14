import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { HTMLAttributes } from "react";
export interface RoundedToggleButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * Whether the toggle button is in active state or not.
     */
    active?: boolean;
    /** Icon to show when the toggle button is in active state. */
    iconOn: IconProp;
    /** Icon to show when the toggle button is not in active state. */
    iconOff: IconProp;
    /** Callback to run when pressing the button, it can be used to handle its active state. */
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Icon to show when the toggle button is in active state. */
    labelOn?: string | undefined;
    /** Icon to show when the toggle button is in active state. */
    labelOff?: string | undefined;
}
declare const RoundedToggleButton: ({ active, iconOn, iconOff, onClick, labelOn, labelOff, ...props }: RoundedToggleButtonProps) => JSX.Element;
export default RoundedToggleButton;
