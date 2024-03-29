import { Meta } from "@storybook/react/types-6-0";
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Default: {
    args: {
        placeholder: string;
        icon: import("@fortawesome/fontawesome-common-types").IconDefinition;
        iconPosition: string;
        endIconOnClick: () => void;
    };
};
export declare const WithALabel: {
    args: {
        label: string;
        placeholder: string;
        icon: import("@fortawesome/fontawesome-common-types").IconDefinition;
        iconPosition: string;
        endIconOnClick: () => void;
    };
};
export declare const WithText: {
    args: {
        placeholder: string;
        icon: import("@fortawesome/fontawesome-common-types").IconDefinition;
        iconPosition: string;
        value: string;
        endIconOnClick: () => void;
    };
};
