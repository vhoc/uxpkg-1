import { HTMLAttributes, ReactNode } from "react";
export interface ViewProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    radius?: string;
    borderColor?: string;
    borderWidth?: string;
    borderStyle?: string;
    padding?: string;
    backgroundColor?: string;
    width?: string;
    height?: string;
    display?: string;
    flexDirection?: string;
}
export declare const View: ({ children, radius, borderColor, borderWidth, borderStyle, padding, backgroundColor, width, height, display, flexDirection, ...ViewProps }: ViewProps) => JSX.Element;
