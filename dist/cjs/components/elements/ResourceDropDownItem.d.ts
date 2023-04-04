import React, { HTMLAttributes } from 'react';
export interface ResourceDropDownItemProps extends HTMLAttributes<HTMLDivElement> {
    /** Upper text (resource name) */
    resourceName: string;
    /** Lower text */
    resourceType: string;
    /** Icon element (Resource icon) */
    icon: any;
    /** The default selected value if any. */
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    /** Style overrides */
    style?: React.CSSProperties | undefined;
}
export declare const ResourceDropDownItem: ({ resourceName, resourceType, icon, onClick, style, }: ResourceDropDownItemProps) => JSX.Element;
