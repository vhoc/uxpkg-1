import React from 'react';
import { ToggleButtonGroupProps } from '@mui/material';
export interface ToggleCloudControlProps extends ToggleButtonGroupProps {
    ariaLabel?: string | undefined;
    onChange?: ((event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => void) | undefined;
    multiSelect?: boolean;
}
export declare const ToggleCloudControl: ({ ariaLabel, multiSelect, }: ToggleCloudControlProps) => JSX.Element;
