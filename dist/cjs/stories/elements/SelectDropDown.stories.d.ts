import { Meta } from "@storybook/react/types-6-0";
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Default: {
    args: {
        value: string;
        menuItems: ({
            value: string;
            label: string;
            selected: boolean;
        } | {
            value: string;
            label: string;
            selected?: undefined;
        })[];
    };
};
export declare const WithLabel: {
    args: {
        label: string;
        value: string;
        menuItems: ({
            value: string;
            label: string;
            selected: boolean;
        } | {
            value: string;
            label: string;
            selected?: undefined;
        })[];
    };
};
export declare const NoItems: {
    args: {
        value: string;
        menuItems: never[];
    };
};
