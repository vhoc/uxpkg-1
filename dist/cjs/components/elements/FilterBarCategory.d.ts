import React, { HTMLAttributes } from "react";
import { FilterBarItemProps } from "./FilterBarItem";
interface FilterBarCategoryProps extends HTMLAttributes<HTMLDivElement> {
    /** The name or label of the category. */
    name?: string;
    /** FilterBarItems to be rendered under the category. */
    children?: React.ReactElement<FilterBarItemProps> | Array<React.ReactElement<FilterBarItemProps>> | undefined;
}
export declare const FilterBarCategory: ({ name, children, ...props }: FilterBarCategoryProps) => JSX.Element;
export {};
