import React from 'react'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { CalendarPickerView, LocalizationProvider, PickersDayProps } from '@mui/x-date-pickers'
import { DatePicker } from '@mui/x-date-pickers'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import { colors } from '../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons'
import { MuiPickersAdapter } from '@mui/x-date-pickers/internals'

export interface SelectDateProps {
    /**
     * Callback fired when the value (the selected date) changes @DateIOType.
     * value: The new parsed value.
     * keyboardInputValue: The current value of the keyboard input.
     */
    onChange: (value: any, keyboardInputValue?: string | undefined) => void,

    /** Placeholder */
    placeholder?: string | undefined

    /** If true the popup or dialog will immediately close after submitting full date. */
    closeOnSelect?: boolean

    /** The value of the picker. */
    value: any

    /** Control the popup or dialog open state. */
    open?: boolean

    /** Formats the day of week displayed in the calendar header. */
    dayOfWeekFormatter?: (say: string) => string

    /** Default calendar month displayed when value={null}. */
    defaultCalendarMonth?: any

    /** If true, the picker and text field are disabled. */
    disabled?: boolean

    /** If true future days are disabled. */
    disableFuture?: boolean

    /** If true future days are disabled. */
    disablePast?: boolean

    /** If true, today's date is rendering without highlighting with circle. */
    disableHighlightToday?: boolean

    /** Get aria-label text for control that opens picker dialog. Aria-label text must include selected date. @DateIOType */
    getOpenDialogAriaText?: ((date: any, utils: MuiPickersAdapter<any>) => string) | undefined

    /** Format string. */
    inputFormat?: string

    /** Pass a ref to the input element. */
    inputRef?: React.Ref<HTMLInputElement> | undefined

    /** Maximal selectable date. @DateIOType */
    maxDate?: any

    /** Maximal selectable date. @DateIOType */
    minDate?: any

    /** Callback fired when date is accepted @DateIOType. */
    onAccept?: ((value: any) => void) | undefined

    /** Callback fired when the popup requests to be closed. Use in controlled mode (see open). */
    onClose?: (() => void) | undefined

    /** Callback firing on month change @DateIOType. */
    onMonthChange?: ((month: any) => void | Promise<void>) | undefined

    /** Callback fired when the popup requests to be opened. Use in controlled mode (see open). */
    onOpen?: (() => void) | undefined

    /** onViewChange?: ((view: CalendarPickerView) => void) | undefined */
    onViewChange?: ((view: CalendarPickerView) => void) | undefined

    /** Callback firing on year change @DateIOType. */
    onYearChange?: ((year: any) => void) | undefined

    /** First view to show. Must be a valid option from views list. Refer to the MUI-X doocumentation. */
    openTo?: CalendarPickerView | undefined

    /** Force rendering in particular orientation. */
    orientation?: "portrait" | "landscape" | undefined

    /** Make picker read only. */
    readOnly?: boolean | undefined

    /** Disable heavy animations. */
    reduceAnimations?: boolean | undefined

    /**
     * Custom renderer for day. Check the PickersDay component.  
     * @template TDate  
     * @param day — The day to render.  
     * @param selectedDays — The days currently selected.  
     * @param pickersDayProps — The props of the day to render.  
     * @returns — The element representing the day.  
     */
    renderDay?: ((day: any, selectedDays: any[], pickersDayProps: PickersDayProps<any>) => JSX.Element) | undefined

    /** Component displaying when passed loading true. */
    renderLoading?: (() => React.ReactNode) | undefined

    /** Disable specific date. @DateIOType */
    shouldDisableDate?: ((day: any) => boolean) | undefined

    /** Disable specific months dynamically. Works like shouldDisableDate but for month selection view @DateIOType. */
    shouldDisableMonth?: ((month: any) => boolean) | undefined

    /** Disable specific years dynamically. Works like shouldDisableDate but for year selection view @DateIOType. */
    shouldDisableYear?: ((year: any) => boolean) | undefined

    /**
     * Array of views to show.  
     * @default  
     * ['year', 'day']
     */
    views?: readonly CalendarPickerView[] | undefined

}

export const SelectDate = ({onChange, placeholder, closeOnSelect, value, open, dayOfWeekFormatter, defaultCalendarMonth, disabled=false, disablePast=true, disableFuture=false, disableHighlightToday=false, getOpenDialogAriaText, inputFormat, inputRef, maxDate, minDate, onAccept, onClose, onMonthChange, onOpen, onViewChange, onYearChange, openTo, orientation, readOnly, reduceAnimations, renderDay, renderLoading, shouldDisableDate, shouldDisableMonth, shouldDisableYear, views }: SelectDateProps): JSX.Element => {

    //const [value, setValue] = useState<any>()
    //const [isOpen, setIsOpen] = useState<boolean>(false)

    const MyBox = styled(Box)({
        backgroundColor: colors.white,
        fontFamily: 'IBM Plex Sans',
        fontSize: '14px',
        color: colors.gray[90],
        borderWidth: '1px',
        borderColor: colors.gray[20],
        borderRadius: '4px',
        width: 'fit-content',
        paddingLeft: '12px',
        paddingRight: '12px',
        height: '40px',
        //cursor: 'pointer',
        '&:hover' : {
            backgroundColor: colors.blue[5],
            borderColor: colors.gray[20],
            //borderWidth: 'px',
            //border: 'none',
        },
        '&:disabled': {
            borderColor: colors.gray[20],
            color: colors.gray[30],
        },
        '&.Mui-focused fieldset' : {
            borderColor: colors.blue[40] + ' !important',
            borderWidth: '1px !important',
            //border: 'inherited',
            boxShadow: 'none',
        },
    })

    const MyInput = styled('input')({
        backgroundColor: 'transparent',
        //cursor: 'pointer',
        border: 'none',
        outline: 'none',
        '&:focus': {
            border: 'none',
            outline: 'none',
        },
    })

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
                value={value}
                closeOnSelect={closeOnSelect}
                onChange={onChange}
                open={open}
                dayOfWeekFormatter={dayOfWeekFormatter}
                defaultCalendarMonth={defaultCalendarMonth}
                disabled={disabled}
                disableFuture={disableFuture}
                disablePast={disablePast}
                disableHighlightToday={disableHighlightToday}
                getOpenDialogAriaText={getOpenDialogAriaText}
                inputFormat={inputFormat}
                inputRef={inputRef}
                maxDate={maxDate}
                minDate={minDate}
                onAccept={onAccept}
                onClose={onClose}
                onMonthChange={onMonthChange}
                onOpen={onOpen}
                onViewChange={onViewChange}
                onYearChange={onYearChange}
                openTo={openTo}
                orientation={orientation}
                readOnly={readOnly}
                reduceAnimations={reduceAnimations}
                renderDay={renderDay}
                renderLoading={renderLoading}
                shouldDisableDate={shouldDisableDate}
                shouldDisableMonth={shouldDisableMonth}
                shouldDisableYear={shouldDisableYear}
                views={views}
                components={{ OpenPickerIcon: () => <FontAwesomeIcon size={'xs'} icon={faCaretDown}/> }} // Goddammit MaterialUI, document THIS PROP!!!
                renderInput={({ inputRef, inputProps, InputProps }) => (
                    <MyBox
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <MyInput
                            ref={inputRef}
                            {...inputProps}
                            placeholder={placeholder}
                        />
                        { InputProps?.endAdornment }
                    </MyBox>
                )}
            />
        </LocalizationProvider>
    )

}