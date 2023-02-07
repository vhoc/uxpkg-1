import { Meta } from '@storybook/react/types-6-0';
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Primary: {
    args: {
        variant: string;
        accessState: string;
        bookmarked: boolean;
        resourceName: string;
        resourceType: string;
        accountName: string;
        region: string;
        dropDownItems: import("../../util/sample-data").IDropDownItem[];
        dotMenuItems: import("../../util/sample-data").IDropDownItem[];
        onBookmarkClick: () => void;
        onMoreInfoClick: () => void;
        onAccessClick: () => void;
    };
};
