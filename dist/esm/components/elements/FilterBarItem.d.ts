import React, { HTMLAttributes } from "react";
import "@fontsource/ibm-plex-sans";
interface FilterBarItemProps extends HTMLAttributes<HTMLElement> {
    name?: string;
    checked?: boolean;
    amount?: number;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
declare const FilterBarItem: ({ name, checked, amount, onClick, ...props }: FilterBarItemProps) => JSX.Element;
export default FilterBarItem;
