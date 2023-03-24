import { Meta } from '@storybook/react/types-6-0';
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Collapsed: {
    args: {
        variant: string;
        menuItems: ({
            icon: import("@fortawesome/fontawesome-common-types").IconDefinition;
            label: string;
            variant: string;
            selected?: undefined;
            itemType?: undefined;
            onClick?: undefined;
        } | {
            icon: import("@fortawesome/fontawesome-common-types").IconDefinition;
            label: string;
            variant: string;
            selected: boolean;
            itemType?: undefined;
            onClick?: undefined;
        } | {
            itemType: string;
            label: string;
            icon?: undefined;
            variant?: undefined;
            selected?: undefined;
            onClick?: undefined;
        } | {
            icon: import("@fortawesome/fontawesome-common-types").IconDefinition;
            label: string;
            variant: string;
            onClick: () => void;
            selected?: undefined;
            itemType?: undefined;
        })[];
    };
};
export declare const Expanded: {
    args: {
        variant: string;
        collapsed: boolean;
        menuItems: ({
            icon: import("@fortawesome/fontawesome-common-types").IconDefinition;
            label: string;
            variant: string;
            selected?: undefined;
            itemType?: undefined;
            onClick?: undefined;
        } | {
            icon: import("@fortawesome/fontawesome-common-types").IconDefinition;
            label: string;
            variant: string;
            selected: boolean;
            itemType?: undefined;
            onClick?: undefined;
        } | {
            itemType: string;
            label: string;
            icon?: undefined;
            variant?: undefined;
            selected?: undefined;
            onClick?: undefined;
        } | {
            icon: import("@fortawesome/fontawesome-common-types").IconDefinition;
            label: string;
            variant: string;
            onClick: () => void;
            selected?: undefined;
            itemType?: undefined;
        })[];
    };
};
