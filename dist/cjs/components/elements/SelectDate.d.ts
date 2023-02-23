import React, { HTMLAttributes } from 'react';
export interface SelectDateProps extends HTMLAttributes<HTMLInputElement> {
    /** ID for the component */
    id?: string | undefined;
    /** Name for the component */
    name?: string | undefined;
    /** Default initial value */
    defaultValue: string;
    /** Value of the component, which is the Date */
    value: string;
    /** Minimum date */
    min?: string;
    /** Maximum date */
    max?: string;
    /** Function to run when a date is selected */
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
export declare const SelectDate: ({ value, onChange, defaultValue, }: SelectDateProps) => JSX.Element;
