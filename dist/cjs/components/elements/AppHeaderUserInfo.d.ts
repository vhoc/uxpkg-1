import { HTMLAttributes } from "react";
export interface AppHeaderUserInfoProps extends HTMLAttributes<HTMLDivElement> {
    userName: string;
    userRole: string;
}
declare const AppHeaderUserInfo: ({ userName, userRole, ...props }: AppHeaderUserInfoProps) => JSX.Element;
export default AppHeaderUserInfo;
