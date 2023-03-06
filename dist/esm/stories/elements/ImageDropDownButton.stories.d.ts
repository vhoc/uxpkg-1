/// <reference types="react" />
import { Meta } from '@storybook/react/types-6-0';
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Clear: {
    args: {
        variant: string;
        size: string;
        menuItems: import("../../util/sample-data").IDropDownItem[];
    };
};
export declare const WithIconAndNoDownArrow: {
    args: {
        variant: string;
        size: string;
        hasDownArrow: boolean;
        mode: string;
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
