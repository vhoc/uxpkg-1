import { HTMLAttributes } from "react";
export interface RingProps extends HTMLAttributes<HTMLDivElement> {
    /** Width of the ring. */
    width?: string;
    /** Height of the ring. */
    height?: string;
}
export declare const Ring: ({ width, height, ...props }: RingProps) => JSX.Element;
