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
