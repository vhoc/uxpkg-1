import { Meta } from "@storybook/react/types-6-0";
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Default: {
    args: {
        title: string;
        onChange: () => void;
        dropDownItems: {
            label: string;
            value: string;
        }[];
    };
};
export declare const WithoutDropdown: {
    args: {
        title: string;
        showDropDown: boolean;
    };
};
