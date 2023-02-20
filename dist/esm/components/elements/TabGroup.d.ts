import { HTMLAttributes, ReactNode } from 'react';
export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    index: number;
    value: number;
}
export declare const TabPanel: ({ children, index, value, ...props }: TabPanelProps) => JSX.Element;
export declare const TabGroup: ({ tabs }: any) => JSX.Element;
