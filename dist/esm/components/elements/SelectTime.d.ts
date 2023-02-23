import React from 'react';
import { CalendarPickerView, PickersDayProps } from '@mui/x-date-pickers';
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
    /** If true the popup or dialog will immediately close after submitting full date. */
    closeOnSelect?: boolean;
    /** The value of the picker. */
    value: any;
    /** Control the popup or dialog open state. */
    open?: boolean;
    /** Formats the day of week displayed in the calendar header. */
    dayOfWeekFormatter?: (say: string) => string;
    /** Default calendar month displayed when value={null}. */
    defaultCalendarMonth?: any;
    /** If true, the picker and text field are disabled. */
    disabled?: boolean;
    /** If true future days are disabled. */
    disableFuture?: boolean;
    /** If true future days are disabled. */
    disablePast?: boolean;
    /** If true, today's date is rendering without highlighting with circle. */
    disableHighlightToday?: boolean;
    /** Get aria-label text for control that opens picker dialog. Aria-label text must include selected date. @DateIOType */
    getOpenDialogAriaText?: ((date: any, utils: MuiPickersAdapter<any>) => string) | undefined;
    /** Format string. */
    inputFormat?: string;
    /** Pass a ref to the input element. */
    inputRef?: React.Ref<HTMLInputElement> | undefined;
    /** Maximal selectable date. @DateIOType */
    maxDate?: any;
    /** Maximal selectable date. @DateIOType */
    minDate?: any;
    /** Callback fired when date is accepted @DateIOType. */
    onAccept?: ((value: any) => void) | undefined;
    /** Callback fired when the popup requests to be closed. Use in controlled mode (see open). */
    onClose?: (() => void) | undefined;
    /** Callback firing on month change @DateIOType. */
    onMonthChange?: ((month: any) => void | Promise<void>) | undefined;
    /** Callback fired when the popup requests to be opened. Use in controlled mode (see open). */
    onOpen?: (() => void) | undefined;
    /** onViewChange?: ((view: CalendarPickerView) => void) | undefined */
    onViewChange?: ((view: CalendarPickerView) => void) | undefined;
    /** Callback firing on year change @DateIOType. */
    onYearChange?: ((year: any) => void) | undefined;
    /** First view to show. Must be a valid option from views list. Refer to the MUI-X doocumentation. */
    openTo?: 'year' | 'month' | 'day';
    /** Force rendering in particular orientation. */
    orientation?: "portrait" | "landscape" | undefined;
    /** Make picker read only. */
    readOnly?: boolean | undefined;
    /** Disable heavy animations. */
    reduceAnimations?: boolean | undefined;
    /**
     * Custom renderer for day. Check the PickersDay component.
     * @template TDate
     * @param day — The day to render.
     * @param selectedDays — The days currently selected.
     * @param pickersDayProps — The props of the day to render.
     * @returns — The element representing the day.
     */
    renderDay?: ((day: any, selectedDays: any[], pickersDayProps: PickersDayProps<any>) => JSX.Element) | undefined;
    /** Component displaying when passed loading true. */
    renderLoading?: (() => React.ReactNode) | undefined;
    /** Disable specific date. @DateIOType */
    shouldDisableDate?: ((day: any) => boolean) | undefined;
    /** Disable specific months dynamically. Works like shouldDisableDate but for month selection view @DateIOType. */
    shouldDisableMonth?: ((month: any) => boolean) | undefined;
    /** Disable specific years dynamically. Works like shouldDisableDate but for year selection view @DateIOType. */
    shouldDisableYear?: ((year: any) => boolean) | undefined;
    /**
     * Array of views to show.
     * @default
     * ['year', 'day']
     */
    views?: readonly CalendarPickerView[] | undefined;
    ampm?: boolean | undefined;
}
export declare const SelectTime: ({ onChange, closeOnSelect, value, open, disabled, getOpenDialogAriaText, inputFormat, inputRef, onAccept, onClose, onOpen, orientation, readOnly, ampm }: SelectTimeProps) => JSX.Element;
