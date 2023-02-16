import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { HTMLAttributes } from "react";
export interface RoundedToggleButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** Icon to show on the side of the label */
    icon: IconProp;
    /** Callback to run when pressing the button, it can be used to handle its active state. */
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Text label in the button. */
    label?: string | undefined;
}
declare const RoundedToggleButton: ({ icon, onClick, label, ...props }: RoundedToggleButtonProps) => JSX.Element;
export default RoundedToggleButton;
