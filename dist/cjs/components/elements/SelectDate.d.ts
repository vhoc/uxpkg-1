import React, { HTMLAttributes } from 'react';
export interface SelectDateProps extends HTMLAttributes<HTMLInputElement> {
    /** ID for the component */
    id?: string | undefined;
    /** Name for the component */
    name?: string | undefined;
    /** Value of the component, which is the Date */
    value: any;
    /** Minimum date */
    min?: any;
    /** Maximum date */
    max?: any;
    /** Function to run when a date is selected */
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
export declare const SelectDate: ({ value, onChange }: SelectDateProps) => JSX.Element;
