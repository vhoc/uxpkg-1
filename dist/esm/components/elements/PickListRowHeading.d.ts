import React from 'react';
export interface PickListHeadingProps {
    /** Number of existing items in the list */
    title?: string | undefined;
    /** Style overrides */
    style?: React.CSSProperties | undefined;
    /** Button Function */
    button: 'add' | 'remove';
    /** Callback function to run when clicking the "Add all" button */
    onClickAddAll?: React.MouseEventHandler<HTMLDivElement> | undefined;
    /** Callback function to run when clickin the "Remove all" button */
    onClickRemoveAll?: React.MouseEventHandler<HTMLDivElement> | undefined;
}
export declare const PickListRowHeading: ({ title, style, button, onClickAddAll, onClickRemoveAll }: PickListHeadingProps) => JSX.Element;
