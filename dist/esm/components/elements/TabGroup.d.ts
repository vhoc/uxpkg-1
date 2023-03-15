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
    /** Leaves the tab control to the parent */
    controllable?: boolean;
    /** Defines which tab is active, requires a number value above 0 and the "controllable" prop to be true. */
    activeIndex?: number | undefined;
    /**
     * The tabs in the component:
     * [{ label: string, tabContent: any, },]
     */
    tabs: any;
    /** The tab content container height. */
    tabContentHeight?: string | undefined;
}
export declare const TabGroup: ({ controllable, activeIndex, tabs, tabContentHeight }: TabGroupProps) => JSX.Element;
export {};
