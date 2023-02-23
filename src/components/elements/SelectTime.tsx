import React from 'react'
import { TimePicker } from '@mui/x-date-pickers'
//import { Box, TextField } from '@mui/material'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import { colors } from '../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons'
import { MuiPickersAdapter } from '@mui/x-date-pickers/internals'

export interface SelectTimeProps {
    /**
     * Callback fired when the value (the selected date) changes @DateIOType.
     * value: The new parsed value.
     * keyboardInputValue: The current value of the keyboard input.
     */
    onChange: (value: any, keyboardInputValue?: string | undefined) => void,

    /** Placeholder */
    placeholder?: string | undefined

    /** If true the popup or dialog will immediately close after submitting full time. */
    closeOnSelect?: boolean

    /** The value of the picker. */
    value: any

    /** Control the popup or dialog open state. */
    open?: boolean

    /** If true, the picker and text field are disabled. */
    disabled?: boolean

    /** Get aria-label text for control that opens picker dialog. Aria-label text must include selected date. @DateIOType */
    getOpenDialogAriaText?: ((date: any, utils: MuiPickersAdapter<any>) => string) | undefined

    /** Format string. */
    inputFormat?: string

    /** Pass a ref to the input element. */
    inputRef?: React.Ref<HTMLInputElement> | undefined

    /** Callback fired when date is accepted @DateIOType. */
    onAccept?: ((value: any) => void) | undefined

    /** Callback fired when the popup requests to be closed. Use in controlled mode (see open). */
    onClose?: (() => void) | undefined

    /** Callback fired when the popup requests to be opened. Use in controlled mode (see open). */
    onOpen?: (() => void) | undefined

    /** First view to show. Must be a valid option from views list. Refer to the MUI-X documentation. */
    openTo?: 'hours' | 'minutes' | 'seconds'

    /** Force rendering in particular orientation. */
    orientation?: "portrait" | "landscape" | undefined

    /** Make picker read only. */
    readOnly?: boolean | undefined

    /**
     * Array of views to show.  
     * @default  
     * ['year', 'day']
     */
    views?: ('hours' | 'minutes' | 'seconds')[]

    ampm?: boolean | undefined

}

export const SelectTime = ({onChange, closeOnSelect, value, open, openTo = 'hours', disabled=false, getOpenDialogAriaText, inputFormat, inputRef, onAccept, onClose, onOpen, orientation, readOnly, ampm = true, views = ['hours', 'minutes'] }: SelectTimeProps): JSX.Element => {

    //const [value, setValue] = useState<any>()
    //const [isOpen, setIsOpen] = useState<boolean>(false)
    
    const MyTimePicker = styled(TimePicker)({
        backgroundColor: colors.white,
        fontFamily: 'IBM Plex Sans',
        fontSize: '14px',
        color: colors.gray[90],
        borderWidth: '1px',
        borderColor: colors.gray[20],
        borderRadius: '4px',
        width: '116px',
        //height: '40px',
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
        '&.MuiOutlinedInput-root fieldset' : {
            borderColor: colors.blue[40] + ' !important',
            borderWidth: '1px !important',
            //border: 'inherited',
            boxShadow: 'none',
        },
    })

    const MyInput = styled(TextField)({
        backgroundColor: colors.white,
        //cursor: 'pointer',
        border: 'none',
        outline: 'none !important',
        fontFamily: 'IBM Plex Sans !important',
        fontSize: '14px',
        color: colors.gray[90],
        borderWidth: '1px',
        borderColor: colors.gray[20],
        borderRadius: '4px',
        width: 'fit-content',
        '&:focus': {
            border: 'none',
            outline: 'none !important',
        },
        '&:hover': {
            border: 'none',
            outline: 'none !important',
        },
        "& .MuiOutlinedInput-input": {
            fontFamily: 'IBM Plex Sans',
            color: colors.gray[90],
            fontSize: '14px',
            outline: 'none',
        },
    })

    return (
            <MyTimePicker
                value={value}
                closeOnSelect={closeOnSelect}
                onChange={onChange}
                open={open}
                disabled={disabled}
                getOpenDialogAriaText={getOpenDialogAriaText}
                inputFormat={inputFormat}
                inputRef={inputRef}
                onAccept={onAccept}
                onClose={onClose}
                openTo={openTo}
                onOpen={onOpen}
                orientation={orientation}
                readOnly={readOnly}
                components={{ OpenPickerIcon: () => <FontAwesomeIcon size={'xs'} icon={faCaretDown}/> }} // Goddammit MaterialUI, document THIS PROP!!!
                ampm={ampm}
                views={views}
                renderInput={(params) => {
                    return (
                        <MyInput
                            {...params}
                            size={'small'}
                        />
                    )
                }}
                
            />
    )

}