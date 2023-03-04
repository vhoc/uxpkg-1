import * as React from 'react';
import { HTMLAttributes, ReactNode } from 'react';
export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    index: number;
    value: number;
    style?: React.CSSProperties | undefined;
    tabContentHeight?: string | undefined;
}
export declare const TabPanel: ({ children, index, value, style, tabContentHeight }: TabPanelProps) => JSX.Element;
interface TabGroupProps {
    tabs: any;
    tabContentHeight?: string | undefined;
}
export declare const TabGroup: ({ tabs, tabContentHeight }: TabGroupProps) => JSX.Element;
export {};
