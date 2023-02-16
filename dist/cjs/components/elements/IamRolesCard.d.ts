import React, { HTMLAttributes, ReactNode } from "react";
export interface IamRolesCardProps extends HTMLAttributes<HTMLDivElement> {
    /** Whether the card is selected or not. */
    selected?: boolean;
    /** Whether the card's role has been assigned or not. */
    assigned?: boolean;
    /** The title text at the top of the card */
    title: string;
    /** De description text below the title */
    description?: string | undefined;
    /** Callback function assigned to the top-right button (+) */
    onClickButtonTopRight?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Callback function assigned to the bottom-left "Open in new tab" button */
    onClickButtonBottomLeft?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Optional styling overrides. */
    style?: React.CSSProperties;
    /** The children inside the collapsable card. Anything goes. */
    children?: ReactNode | undefined;
}
declare const IamRolesCard: ({ selected, assigned, title, description, onClickButtonTopRight, onClickButtonBottomLeft, style, children, ...props }: IamRolesCardProps) => JSX.Element;
export default IamRolesCard;
