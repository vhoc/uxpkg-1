import { HTMLAttributes, ReactNode } from "react";
interface FilterBarResourcesProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
declare const FilterBarResources: ({ children, ...props }: FilterBarResourcesProps) => JSX.Element;
export default FilterBarResources;
