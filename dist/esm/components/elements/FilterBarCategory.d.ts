import { HTMLAttributes, ReactNode } from "react";
interface FilterBarCategoryProps extends HTMLAttributes<HTMLDivElement> {
    name?: string;
    children: ReactNode;
}
export declare const FilterBarCategory: ({ name, children, ...props }: FilterBarCategoryProps) => JSX.Element;
export {};
