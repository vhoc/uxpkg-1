/// <reference types="react" />
import { Meta } from "@storybook/react/types-6-0";
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Default: {
    args: {
        title: string;
        caption: string;
        onClickFullDetail: () => void;
        onClickClose: () => void;
        resourcesAmount: number;
        identitiesAmount: number;
        tabs: {
            label: string;
            tabContent: JSX.Element;
        }[];
    };
};
