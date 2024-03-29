import React, { CSSProperties } from 'react'
import { FormControl, InputAdornment, InputProps, OutlinedInput } from '@mui/material'
import { colors } from '../../theme'
import { styled, SxProps, Theme } from '@mui/material/styles';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from './Typography';

export interface TextInputProps extends InputProps {
    /**
     * An optional label to be shown at the top of the input.
     */
    label?: string | undefined
    /**
     * This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it's more like an autofill. You can learn more about it here: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
     */
    autoComplete?: string | undefined
    /**
     * If true, the input element is focused during the first mount.
     */
    autoFocus?: boolean
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: object
    /**
     * The default value. Use when the component is not controlled.
     */
    defaultValue?: any
    /**
     * If true, the component is disabled. The prop defaults to the value (false) inherited from the parent FormControl component.
     */
    disabled?: boolean | undefined

    /**
     * 	If true, the input will indicate an error. The prop defaults to the value (false) inherited from the parent FormControl component.
     */
    error?: boolean

    /**
     * If true, the input will take up the full width of its container.
     */
    fullWidth?: boolean

    /**
     * The id of the input element.
     */
    id?: string

    /**
     * 	If true, a TextareaAutosize element is rendered.
     */
    multiline?: boolean

    /**
     * Name attribute of the input element.
     */
    name?: string

    /**
     * 	Callback fired when the value is changed.
     */
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void

    /**
     * 	The short hint displayed in the input before the user enters a value.
     */
    placeholder?: string

    /**
     * It prevents the user from changing the value of the field (not from interacting with the field).
     */
    readOnly?: boolean

    /**
     * 	If true, the input element is required. The prop defaults to the value (false) inherited from the parent FormControl component.
     */
    required?: boolean

    /**
     * 	Number of rows to display when multiline option is set to true.
     */
    rows?: number

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
     */
    sx?: SxProps<Theme> | undefined

    /**
     * Type of the input element. It should be a valid HTML5 input type.
     */
    type?: string

    /**
     * The value of the input element, required for a controlled component.
     */
    value?: any

    /**
     * A FontAwesome 6 Icon
     */
    icon?: IconProp

    /**
     * Whether the icon is on the left or right of the input
     */
    iconPosition?: 'start' | 'end' | undefined

    /** Style overrides for the icon */
    iconStyle?: CSSProperties | undefined

    /**
     * Function to be assigned to the X icon on the right of the input.
     * This can be used to handle the input value (delete the text inside).  
     * It requires the iconPosition prop be set at 'end'.
     */
    onClickEndIcon?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const MyInput = styled(OutlinedInput)({
    backgroundColor: colors.white,
    fontFamily: 'IBM Plex Sans',
    fontSize: '14px',
    color: colors.gray[90],
    borderColor: colors.gray[20],
    minHeight: '40px',
    '&:hover' : {
        backgroundColor: colors.blue[5],
        borderColor: colors.gray[20],
        borderWidth: '0px',
        border: 'none',
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

export const TextInput = ({ label, autoComplete, autoFocus, classes, defaultValue, disabled = false, error, id, icon, name, onChange, placeholder, iconPosition = 'start', fullWidth = false, multiline = false, readOnly = false, required = false, rows = 1, sx, type, value, onClickEndIcon, iconStyle, ...props }: TextInputProps): JSX.Element => {

    return (
        <FormControl
            sx={{
                fontFamily: 'IBM Plex Sans',
                p: 0,
                minHeight: '40px',
                '&:hover fieldset' : {
                    borderColor: colors.gray[20] + ' !important',
                    borderWidth: '1px',
                    boxShadow: 'none',
                },
                ...sx,
            }}
            size={'small'}
            disabled={disabled}
            >
            {
                label && label.length >= 1 ?
                    <Typography
                        variant={'body-regular'}
                        style={{
                            marginBottom: '4px',
                        }}
                    >
                        {label}
                    </Typography>
                :
                    null
            }
                <MyInput
                    id={id}                    
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    classes={classes}
                    defaultValue={defaultValue}
                    error={error}
                    name={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    fullWidth={fullWidth}
                    multiline={multiline}
                    readOnly={readOnly}
                    required={required}
                    rows={rows}
                    sx={{ width: '100%', }}
                    type={type}
                    value={value}
                    startAdornment={ icon && iconPosition === 'start' ?                     
                        <InputAdornment position={ iconPosition }>
                            <FontAwesomeIcon icon={ icon } style={{ color: colors.gray[30] }}/>                            
                        </InputAdornment>
                    :
                        null
                    }
                    endAdornment={ icon && iconPosition === 'end' ?                     
                        <InputAdornment
                            position={ iconPosition }
                            onClick={onClickEndIcon}
                        >
                            <FontAwesomeIcon
                                icon={ icon }
                                style={iconStyle}
                            />                    
                        </InputAdornment>
                    :
                        null
                    }
                    {...props}
                />
        </FormControl>
    )

}