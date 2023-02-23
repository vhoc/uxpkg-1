import React, { HTMLAttributes } from 'react';
export interface SelectTimeProps extends HTMLAttributes<HTMLInputElement> {
    /** ID for the component */
    id?: string | undefined;
    /** Name for the component */
    name?: string | undefined;
    /** Default initial value */
    defaultValue?: string | undefined;
    /** Value of the component, which is the time */
    value?: string | undefined;
    /** Minimum time */
    min?: string;
    /** Maximum time */
    max?: string;
    /** Function to run when a time is selected */
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
export declare const SelectTime: ({ value, onChange, defaultValue, }: SelectTimeProps) => JSX.Element;
