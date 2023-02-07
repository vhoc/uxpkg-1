import { HTMLAttributes } from "react";
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    label: string;
}
declare const Badge: ({ label, ...props }: BadgeProps) => JSX.Element;
export default Badge;
