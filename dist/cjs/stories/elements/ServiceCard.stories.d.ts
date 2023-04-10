import { Meta } from '@storybook/react/types-6-0';
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Default: {
    args: {
        serviceType: string;
        accessState: string;
        bookmarked: boolean;
        resourceName: string;
        resourceType: string;
        accountName: string;
        region: string;
        dotMenuItems: import("../../util/sample-data").IDropDownItem[];
        onClickBookmark: () => void;
        onClickMoreInfo: () => void;
    };
};
export declare const WithMoreInfoButton: {
    args: {
        serviceType: string;
        accessState: string;
        bookmarked: boolean;
        showMoreInfoButton: boolean;
        resourceName: string;
        resourceType: string;
        accountName: string;
        region: string;
        dotMenuItems: import("../../util/sample-data").IDropDownItem[];
        onClickBookmark: () => void;
        onClickMoreInfo: () => void;
    };
};
