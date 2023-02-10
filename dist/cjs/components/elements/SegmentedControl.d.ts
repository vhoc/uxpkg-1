import { ReactNode } from 'react';
export interface SegmentedControlProps {
    children: ReactNode;
    multiSelect?: boolean;
    ariaLabel: string;
}
declare const SegmentedControl: ({ children, multiSelect, ariaLabel }: SegmentedControlProps) => JSX.Element;
export default SegmentedControl;
