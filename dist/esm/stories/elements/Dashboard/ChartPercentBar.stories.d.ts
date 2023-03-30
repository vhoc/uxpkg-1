import { Meta } from "@storybook/react/types-6-0";
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Default: {
    args: {
        criteria: string;
        data: {
            risk: string;
            Users: string;
            value: number;
            color: string;
        }[];
    };
};
export declare const Broader: {
    args: {
        maxBarWidth: number;
        height: number;
        criteria: string;
        data: {
            risk: string;
            Users: string;
            value: number;
            color: string;
        }[];
    };
};
export declare const NoLegend: {
    args: {
        legend: boolean;
        maxBarWidth: number;
        height: number;
        criteria: string;
        data: {
            risk: string;
            Users: string;
            value: number;
            color: string;
        }[];
    };
};
