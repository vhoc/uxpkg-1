/// <reference types="react" />
import { Meta } from "@storybook/react/types-6-0";
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Accounts: {
    args: {
        type: string;
        icon: import("@fortawesome/fontawesome-common-types").IconDefinition;
        title: string;
        counterItems: {
            element: JSX.Element;
            count: number;
        }[];
    };
};
export declare const Users: {
    args: {
        type: string;
        icon: import("@fortawesome/fontawesome-common-types").IconDefinition;
        title: string;
        data: {
            risk: string;
            Users: string;
            value: number;
        }[];
    };
};
export declare const Mini: {
    args: {
        type: string;
        icon: import("@fortawesome/fontawesome-common-types").IconDefinition;
        title: string;
        content: string;
    };
};
