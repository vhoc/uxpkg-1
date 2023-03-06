import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { HTMLAttributes } from "react";
export interface UserGroupBarProps extends HTMLAttributes<HTMLDivElement> {
    /** Whether to show a User or Group item. */
    type: 'user' | 'group';
    /** Name of the user or the group */
    name: string;
    /** Optional icon override. Normally it will depend on the 'type' prop */
    leftIcon?: IconProp;
    /** Caption, it will be an email if the type prop is 'user', otherwise will be the amount of users that the group contains. */
    caption?: string | undefined;
    /** Selected state. It affects the background color. */
    selected?: boolean;
    /** Assigned state. It affects the button on the right. */
    assigned?: boolean;
    /** Add button function */
    addButtonOnClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Remove button function */
    removeButtonOnClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Style override for the container */
    style?: React.CSSProperties | undefined;
    /** Toggle the add/remove button */
    endButton?: boolean;
    /** onClick for the component */
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}
export declare const UserGroupBar: ({ type, name, leftIcon, caption, selected, assigned, addButtonOnClick, removeButtonOnClick, style, endButton, onClick, }: UserGroupBarProps) => JSX.Element;
