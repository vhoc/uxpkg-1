import { HTMLAttributes } from "react";
export interface ProcyonShieldProps extends HTMLAttributes<HTMLDivElement> {
    width?: string;
    height?: string;
}
export declare const ProcyonShield: ({ width, height, ...props }: ProcyonShieldProps) => JSX.Element;
