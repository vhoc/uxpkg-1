/// <reference types="react" />
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export declare const testAlert: () => void;
export interface IDropDownItem {
    icon?: IconProp;
    title: string | JSX.Element;
    style?: object;
    submenu?: IDropDownItem[];
    action?: Function | null;
}
export declare const menuItems: IDropDownItem[];
export declare const menu2Items: IDropDownItem[];
export declare const menu3Items: IDropDownItem[];
export declare const menu4Items: IDropDownItem[];
export declare const _data: ({
    id: string;
    value: string;
    label: string;
    description: string;
    type: string;
    route: string[];
}[] | {
    id: string;
    value: string;
    label: string;
    type: string;
    description: string;
}[] | {
    id: string;
    value: string;
    type: string;
    label: string;
}[])[];
export declare const action: (e: any) => void;
export declare const actions: ({
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
export declare const connections: {
    startID: string;
    endID: string;
}[];
