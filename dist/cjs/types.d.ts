import { ReactNode } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export interface ITab {
    label: string;
    tabContent: ReactNode;
}
export interface ISegmentedControlItem {
    value: string;
    ariaLabel: string;
    icon: IconProp | ReactNode;
}
