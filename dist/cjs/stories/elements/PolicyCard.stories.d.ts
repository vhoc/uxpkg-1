/// <reference types="react" />
import { Meta } from "@storybook/react/types-6-0";
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Default: {
    args: {
        policyName: string;
        accountName: string;
        accountNumber: string;
        expirationTime: string;
        onClickResources: () => void;
        onClickIdentities: () => void;
        resourcesAmount: number;
        identitiesAmount: number;
        menuItems: {
            title: JSX.Element;
            submenu: ({
                title: string;
                action?: undefined;
            } | {
                title: string;
                action: () => void;
            })[];
        }[];
    };
};
