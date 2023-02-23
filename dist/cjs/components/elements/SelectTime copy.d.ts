import React from 'react';
import { MuiPickersAdapter } from '@mui/x-date-pickers/internals';
export interface SelectTimeProps {
    /**
     * Callback fired when the value (the selected date) changes @DateIOType.
     * value: The new parsed value.
     * keyboardInputValue: The current value of the keyboard input.
     */
    onChange: (value: any, keyboardInputValue?: string | undefined) => void;
    /** Placeholder */
    placeholder?: string | undefined;
    /** If true the popup or dialog will immediately close after submitting full time. */
    closeOnSelect?: boolean;
    /** The value of the picker. */
    value: any;
    /** Control the popup or dialog open state. */
    open?: boolean;
    /** If true, the picker and text field are disabled. */
    disabled?: boolean;
    /** Get aria-label text for control that opens picker dialog. Aria-label text must include selected date. @DateIOType */
    getOpenDialogAriaText?: ((date: any, utils: MuiPickersAdapter<any>) => string) | undefined;
    /** Format string. */
    inputFormat?: string;
    /** Pass a ref to the input element. */
    inputRef?: React.Ref<HTMLInputElement> | undefined;
    /** Callback fired when date is accepted @DateIOType. */
    onAccept?: ((value: any) => void) | undefined;
    /** Callback fired when the popup requests to be closed. Use in controlled mode (see open). */
    onClose?: (() => void) | undefined;
    /** Callback fired when the popup requests to be opened. Use in controlled mode (see open). */
    onOpen?: (() => void) | undefined;
    /** First view to show. Must be a valid option from views list. Refer to the MUI-X documentation. */
    openTo?: 'hours' | 'minutes' | 'seconds';
    /** Force rendering in particular orientation. */
    orientation?: "portrait" | "landscape" | undefined;
    /** Make picker read only. */
    readOnly?: boolean | undefined;
    /**
     * Array of views to show.
     * @default
     * ['year', 'day']
     */
    views?: ('hours' | 'minutes' | 'seconds')[];
    ampm?: boolean | undefined;
}
export declare const SelectTime: ({ onChange, closeOnSelect, value, open, openTo, disabled, getOpenDialogAriaText, inputFormat, inputRef, onAccept, onClose, onOpen, orientation, readOnly, ampm, views }: SelectTimeProps) => JSX.Element;
