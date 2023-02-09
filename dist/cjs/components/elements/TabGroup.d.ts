import { HTMLAttributes, ReactNode } from 'react';
export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    index: number;
    value: number;
}
declare const TabGroup: ({ tabs }: any) => JSX.Element;
export default TabGroup;
