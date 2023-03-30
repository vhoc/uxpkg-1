import { Meta } from "@storybook/react/types-6-0";
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Primary: {
    args: {
        variant: string;
        showDropDownButton: boolean;
        textMessage: string;
        continueButtonOnClick: () => void;
        menuItems: {
            value: string;
            label: string;
            onClick: () => void;
        }[];
    };
};
export declare const CustomIcon: {
    args: {
        variant: string;
        leftIcon: import("@fortawesome/fontawesome-common-types").IconDefinition;
        showDropDownButton: boolean;
        textMessage: string;
        continueButtonOnClick: () => void;
        menuItems: {
            value: string;
            label: string;
            onClick: () => void;
        }[];
    };
};
export declare const Success: {
    args: {
        variant: string;
        textMessage: string;
        continueButtonOnClick: () => void;
    };
};
export declare const Warning: {
    args: {
        variant: string;
        textMessage: string;
        continueButtonOnClick: () => void;
    };
};
export declare const Danger: {
    args: {
        variant: string;
        showExtraButton: boolean;
        extraButtonLabel: string;
        extraButtonOnClick: () => void;
        textMessage: string;
        continueButtonOnClick: () => void;
    };
};
