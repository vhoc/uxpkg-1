import { HTMLAttributes, ReactNode } from "react";
interface FilterBarResourcesProps extends HTMLAttributes<HTMLDivElement> {
    /** All the categories and filter controls. (Any ReactNode) */
    children: ReactNode;
}
export declare const FilterBarResources: ({ children, ...props }: FilterBarResourcesProps) => JSX.Element;
export {};
