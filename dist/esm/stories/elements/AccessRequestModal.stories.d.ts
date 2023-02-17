import { Meta } from "@storybook/react/types-6-0";
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const AccessRequestQueued: {
    args: {
        variant: string;
        requestCount: number;
        leftIcon: import("@fortawesome/fontawesome-common-types").IconDefinition;
        textMessage: string;
        continueButtonOnClick: () => void;
        menuItems: {
            value: string;
            label: string;
            onClick: () => void;
        }[];
    };
};
export declare const AccessRequestSubmitted: {
    args: {
        variant: string;
        leftIcon: import("@fortawesome/fontawesome-common-types").IconDefinition;
        textMessage: string;
        continueButtonOnClick: () => void;
    };
};
