import React from 'react';
import { ToggleButtonGroupProps } from '@mui/material';
export interface ToggleCloudControlProps extends ToggleButtonGroupProps {
    value: string[] | string;
    ariaLabel?: string | undefined;
    onChange?: ((event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => void) | undefined;
    multiSelect?: boolean;
}
export declare const ToggleCloudControl: ({ ariaLabel, multiSelect, value, onChange }: ToggleCloudControlProps) => JSX.Element;
