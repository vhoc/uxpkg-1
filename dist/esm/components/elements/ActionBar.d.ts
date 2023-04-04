import React, { HTMLAttributes } from "react";
export interface ActionBarProps extends HTMLAttributes<HTMLDivElement> {
    /** Name of the user or the group */
    name: string;
    /** Optional icon override. Normally it will depend on the 'type' prop */
    leftIcon?: any;
    /** Caption, it will be an email if the type prop is 'user', otherwise will be the amount of users that the group contains. */
    caption?: string | undefined;
    /** Selected state. It affects the background color. */
    selected?: boolean;
    /** Assigned state. It affects the button on the right. */
    assigned?: boolean;
    /** Add button function */
    onClickAddButton?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Remove button function */
    onClickRemoveButton?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Style override for the container */
    style?: React.CSSProperties | undefined;
}
export declare const ActionBar: ({ name, leftIcon, selected, assigned, onClickAddButton, onClickRemoveButton, style, }: ActionBarProps) => JSX.Element;
