import React, { CSSProperties } from 'react';
import { InputProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export interface TextInputProps extends InputProps {
    /**
     * An optional label to be shown at the top of the input.
     */
    label?: string | undefined;
    /**
     * This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it's more like an autofill. You can learn more about it here: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
     */
    autoComplete?: string | undefined;
    /**
     * If true, the input element is focused during the first mount.
     */
    autoFocus?: boolean;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: object;
    /**
     * The default value. Use when the component is not controlled.
     */
    defaultValue?: any;
    /**
     * If true, the component is disabled. The prop defaults to the value (false) inherited from the parent FormControl component.
     */
    disabled?: boolean | undefined;
    /**
     * 	If true, the input will indicate an error. The prop defaults to the value (false) inherited from the parent FormControl component.
     */
    error?: boolean;
    /**
     * If true, the input will take up the full width of its container.
     */
    fullWidth?: boolean;
    /**
     * The id of the input element.
     */
    id?: string;
    /**
     * 	If true, a TextareaAutosize element is rendered.
     */
    multiline?: boolean;
    /**
     * Name attribute of the input element.
     */
    name?: string;
    /**
     * 	Callback fired when the value is changed.
     */
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    /**
     * 	The short hint displayed in the input before the user enters a value.
     */
    placeholder?: string;
    /**
     * It prevents the user from changing the value of the field (not from interacting with the field).
     */
    readOnly?: boolean;
    /**
     * 	If true, the input element is required. The prop defaults to the value (false) inherited from the parent FormControl component.
     */
    required?: boolean;
    /**
     * 	Number of rows to display when multiline option is set to true.
     */
    rows?: number;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
     */
    sx?: SxProps<Theme> | undefined;
    /**
     * Type of the input element. It should be a valid HTML5 input type.
     */
    type?: string;
    /**
     * The value of the input element, required for a controlled component.
     */
    value?: any;
    /**
     * A FontAwesome 6 Icon
     */
    icon?: IconProp;
    /**
     * Whether the icon is on the left or right of the input
     */
    iconPosition?: 'start' | 'end' | undefined;
    /** Style overrides for the icon */
    iconStyle?: CSSProperties | undefined;
    /**
     * Function to be assigned to the X icon on the right of the input.
     * This can be used to handle the input value (delete the text inside).
     * It requires the iconPosition prop be set at 'end'.
     */
    endIconOnClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}
export declare const TextInput: ({ label, autoComplete, autoFocus, classes, defaultValue, disabled, error, id, icon, name, onChange, placeholder, iconPosition, fullWidth, multiline, readOnly, required, rows, sx, type, value, endIconOnClick, iconStyle, ...props }: TextInputProps) => JSX.Element;
