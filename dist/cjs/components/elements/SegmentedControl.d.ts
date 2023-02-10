import { ISegmentedControlItem } from '../../types';
export interface SegmentedControlProps {
    /**
     * items' icon can be either a ReactNode or an IconProp.
     */
    items: ISegmentedControlItem[];
    multiSelect?: boolean;
    ariaLabel: string;
}
declare const SegmentedControl: ({ items, multiSelect, ariaLabel }: SegmentedControlProps) => JSX.Element;
export default SegmentedControl;
