import React from 'react';
import { ToggleButtonGroupProps } from '@mui/material';
export interface ToggleCloudControlProps extends ToggleButtonGroupProps {
    value: 'aws' | 'azure' | 'google';
    ariaLabel?: string | undefined;
    onChange?: ((event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => void) | undefined;
}
export declare const ToggleCloudControl: ({ value, onChange, ariaLabel, }: ToggleCloudControlProps) => JSX.Element;
