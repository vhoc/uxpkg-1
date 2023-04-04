/// <reference types="react" />
import { ISegmentedControlItem } from '../../types';
export interface SegmentedControlProps {
    /**
     * Item object Props:
     * - value: string
     * - ariaLabel: string
     * - icon: IconProp | ReactNode
     * - selected: boolean
     * - onClick: (event: React.MouseEvent<HTMLElement>, value: any) => void
     * - onChange: (event: React.MouseEvent<HTMLElement>, value: any) => void
     * - disabled: boolean
     */
    items: ISegmentedControlItem[];
    /** Enables or disables the selection of multiple options at the same time. */
    multiSelect?: boolean;
    /** Aria label html property. */
    ariaLabel: string;
}
export declare const SegmentedControl: ({ items, multiSelect, ariaLabel, }: SegmentedControlProps) => JSX.Element;
