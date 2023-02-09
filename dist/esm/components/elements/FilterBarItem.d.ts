import React, { HTMLAttributes } from "react";
import "@fontsource/ibm-plex-sans";
interface FilterBarItemProps extends HTMLAttributes<HTMLDivElement> {
    name?: string;
    checked?: boolean;
    amount?: number;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}
declare const FilterBarItem: ({ name, checked, amount, onClick, ...props }: FilterBarItemProps) => JSX.Element;
export default FilterBarItem;
