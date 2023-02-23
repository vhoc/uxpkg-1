import { HTMLAttributes } from 'react';
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
}
export declare const SelectDate: ({ value }: SelectDateProps) => JSX.Element;
