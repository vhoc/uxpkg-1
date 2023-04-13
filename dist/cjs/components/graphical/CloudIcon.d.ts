import React from 'react';
export interface CloudIconProps {
    /** The type of the icon (Cloud service) */
    type: 'aws' | 'gcp' | 'azure' | 'private';
    /** Style overrides */
    style?: React.CSSProperties | undefined;
}
export declare const CloudIcon: ({ type, style }: CloudIconProps) => JSX.Element;
