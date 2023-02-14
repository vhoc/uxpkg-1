import React, { HTMLAttributes } from "react";
export interface IamRolesCardProps extends HTMLAttributes<HTMLDivElement> {
    selected?: boolean;
    expanded?: boolean;
    title: string;
    description?: string | undefined;
    onClickButtonTopRight?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onClickButtonBottomLeft?: React.MouseEventHandler<HTMLDivElement> | undefined;
    style?: React.CSSProperties;
}
declare const IamRolesCard: ({ selected, expanded, title, description, onClickButtonTopRight, onClickButtonBottomLeft, style, ...props }: IamRolesCardProps) => JSX.Element;
export default IamRolesCard;
