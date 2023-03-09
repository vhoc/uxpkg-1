/// <reference types="react" />
import { Meta } from "@storybook/react/types-6-0";
import { GridRenderCellParams } from "@mui/x-data-grid";
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Default: {
    args: {
        columns: ({
            field: string;
            headerName: string;
            width: number;
            renderCell?: undefined;
            sortable?: undefined;
        } | {
            field: string;
            headerName: string;
            width: number;
            renderCell: (params: GridRenderCellParams) => JSX.Element;
            sortable?: undefined;
        } | {
            field: string;
            headerName: string;
            sortable: boolean;
            renderCell: (params: GridRenderCellParams) => JSX.Element;
            width: number;
        })[];
        rows: {
            id: number;
            name: string;
            requestedFor: string;
            resources: {
                id: number;
                amount: number;
                onClick: () => void;
            };
            submittedOn: string;
            detailsButton: {
                id: number;
                onClick: () => void;
            };
            menuButton: {
                id: number;
                menuItems: {
                    title: string;
                    action: () => void;
                }[];
                title: JSX.Element;
            };
        }[];
    };
};
