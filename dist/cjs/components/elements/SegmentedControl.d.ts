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
    multiSelect?: boolean;
    ariaLabel: string;
}
declare const SegmentedControl: ({ items, multiSelect, ariaLabel, }: SegmentedControlProps) => JSX.Element;
export default SegmentedControl;
