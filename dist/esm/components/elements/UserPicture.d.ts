import { HTMLAttributes } from "react";
export interface UserPictureProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Width in pixels as a Number (not a string).
     */
    width?: number;
    /** Height in pixels as a Number */
    height?: number;
    /** Source of the image. */
    src?: string;
}
export declare const UserPicture: ({ width, height, src, ...props }: UserPictureProps) => JSX.Element;
