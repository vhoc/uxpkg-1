import { HTMLAttributes } from "react";
export interface RingProps extends HTMLAttributes<HTMLDivElement> {
    width?: string;
    height?: string;
}
export declare const Ring: ({ width, height, ...props }: RingProps) => JSX.Element;
