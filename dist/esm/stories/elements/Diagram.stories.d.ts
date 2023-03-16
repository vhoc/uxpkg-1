import { Meta } from '@storybook/react/types-6-0';
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Default: {
    args: {
        data: ({
            id: string;
            value: string;
            label: string;
            description: string;
            type: number;
            route: string[];
        }[] | {
            id: string;
            value: string;
            label: string;
            type: number;
            description: string;
        }[] | {
            id: string;
            value: string;
            type: number;
            label: string;
        }[])[];
        arrows: {
            startID: string;
            endID: string;
        }[];
        actions: ({
            id: string;
            label: string;
            onClick: (e: any) => void;
            type?: undefined;
        } | {
            id: string;
            label: string;
            onClick: (e: any) => void;
            type: number;
        })[];
    };
};
