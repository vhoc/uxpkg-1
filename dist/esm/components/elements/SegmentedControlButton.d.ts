import { CSSProperties, ReactNode } from 'react';
export interface SegmentedControlButtonProps {
    style?: CSSProperties;
    children: ReactNode;
    value: string;
    ariaLabel: string;
}
declare const SegmentedControlButton: ({ style, children, value, ariaLabel }: SegmentedControlButtonProps) => JSX.Element;
export default SegmentedControlButton;
