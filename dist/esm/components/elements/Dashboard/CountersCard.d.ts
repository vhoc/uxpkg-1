import React, { HTMLAttributes } from 'react';
import { ICounterItem } from '../../../types';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export interface CountersCardProps extends HTMLAttributes<HTMLDivElement> {
    /** Type of the Card ('simple' | 'percent-bar' | 'mini') */
    type?: 'simple' | 'percent-bar' | 'mini';
    /** Icon at the top left corner of the card */
    icon?: IconProp | undefined;
    /** Criteria name (i.e. 'Users', 'Roles', 'Groups'...) */
    title: string;
    /**
     *  Counter items array
     * [
     *      {
     *          element?: (any),
     *          count: (number)
     *      },
     * ]
     */
    counterItems?: ICounterItem[] | undefined;
    /** Style overrides */
    style?: React.CSSProperties | undefined;
    /** Chart bar data array */
    data?: Record<string, any>[];
    /** Criteria name (i.e. 'Users', 'Roles', 'Groups'...) */
    criteria?: string;
    /** Content (Displayed only in the 'mini' type) */
    content?: string;
}
export declare const CountersCard: ({ type, icon, title, counterItems, data, criteria, content, style }: CountersCardProps) => JSX.Element;
