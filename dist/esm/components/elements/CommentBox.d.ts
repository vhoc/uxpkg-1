import React, { HTMLAttributes } from 'react';
export interface CommentBoxProps extends HTMLAttributes<HTMLDivElement> {
    /** The title of the comment (at the top of the box) */
    title?: string | undefined;
    /** Date and time of the comment. Top-right corner */
    timestamp?: string | undefined;
    /** Comment body */
    comment?: string | undefined;
    /** Style overrides */
    style?: React.CSSProperties | undefined;
}
export declare const CommentBox: ({ title, timestamp, comment, style }: CommentBoxProps) => JSX.Element;
