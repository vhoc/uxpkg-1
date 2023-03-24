import React, { HTMLAttributes } from 'react';
import { ICounterItem } from '../../../types';
export interface CounterItemProps extends ICounterItem, HTMLAttributes<HTMLDivElement> {
    /** Element (any type) */
    element?: any;
    /** Count */
    count: number;
    /** Style overrides */
    style?: React.CSSProperties | undefined;
}
export declare const CounterItem: ({ element, count, style }: CounterItemProps) => JSX.Element;
