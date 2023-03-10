import { Meta } from "@storybook/react/types-6-0";
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const NoAutoApprove: {
    args: {
        title: string;
        autoApprove: boolean;
        endDateOptions: {
            label: string;
            value: string;
        }[];
        endDateValue: string;
        timeOptions: {
            label: string;
            value: string;
        }[];
        timeValue: string;
        onClickCancel: () => void;
        onClickApprove: () => void;
    };
};
export declare const AutoApprove: {
    args: {
        title: string;
        autoApprove: boolean;
        endDateOptions: {
            label: string;
            value: string;
        }[];
        endDateValue: string;
        timeOptions: {
            label: string;
            value: string;
        }[];
        timeValue: string;
        onClickCancel: () => void;
        onClickApprove: () => void;
    };
};
