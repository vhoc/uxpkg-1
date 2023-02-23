import { HTMLAttributes } from 'react';
export interface LoadingModalProps extends HTMLAttributes<HTMLDivElement> {
    message: string;
    caption?: string | undefined;
}
export declare const LoadingModal: ({ message, caption, ...props }: LoadingModalProps) => JSX.Element;
