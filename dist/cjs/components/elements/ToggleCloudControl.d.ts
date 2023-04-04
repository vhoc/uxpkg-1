import React from 'react';
import { ToggleButtonGroupProps } from '@mui/material';
export interface ToggleCloudControlProps extends ToggleButtonGroupProps {
    /** The value of the control. */
    value: string[] | string;
    /** Aria Label HTML property */
    ariaLabel?: string | undefined;
    /** Function to run when changing the value. */
    onChange?: ((event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => void) | undefined;
    /** Enables or disables the selection of multiple values. */
    multiSelect?: boolean;
}
export declare const ToggleCloudControl: ({ ariaLabel, multiSelect, value, onChange }: ToggleCloudControlProps) => JSX.Element;
