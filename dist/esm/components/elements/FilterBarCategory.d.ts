import { HTMLAttributes, ReactNode } from "react";
interface FilterBarCategoryProps extends HTMLAttributes<HTMLDivElement> {
    name?: string;
    children: ReactNode;
}
declare const FilterBarCategory: ({ name, children, ...props }: FilterBarCategoryProps) => JSX.Element;
export default FilterBarCategory;
