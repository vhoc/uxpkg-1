import { HTMLAttributes } from 'react';
export interface LoadingModalProps extends HTMLAttributes<HTMLDivElement> {
    /** A text message to be shown in the modal. */
    message: string;
    /** A smaller text to be shown below the message. */
    caption?: string | undefined;
}
export declare const LoadingModal: ({ message, caption, ...props }: LoadingModalProps) => JSX.Element;
