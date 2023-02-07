import { HTMLAttributes } from "react";
export interface UserPictureProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Width in pixels as a Number (not a string).
     */
    width?: number;
    height?: number;
    src?: string;
}
declare const UserPicture: ({ width, height, src, ...props }: UserPictureProps) => JSX.Element;
export default UserPicture;
