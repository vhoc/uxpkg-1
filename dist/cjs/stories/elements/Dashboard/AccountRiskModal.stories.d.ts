import { Meta } from "@storybook/react/types-6-0";
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Default: {
    args: {
        items: ({
            accountProvider: string;
            title: string;
            caption: string;
            riskLevel: string;
            onClick?: undefined;
        } | {
            accountProvider: string;
            title: string;
            caption: string;
            riskLevel: string;
            onClick: () => void;
        })[];
    };
};
