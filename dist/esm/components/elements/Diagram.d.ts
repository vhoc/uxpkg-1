import React from "react";
import "./styles.css";
interface Column {
    id: string;
    value?: string;
    label: string;
    description?: string;
    route?: Array<any>;
    icon?: any;
    type?: string;
}
interface Arrow {
    startID: string;
    endID: string;
}
interface Action {
    onClick: React.MouseEventHandler<HTMLDivElement>;
    label: string;
    id: string;
    type?: number;
}
interface Props {
    data: Column[][];
    arrows?: Array<Arrow>;
    actions: Action[];
    containerStyle?: {};
    columnStyle?: {};
}
export declare const Diagram: React.FC<Props>;
export {};
