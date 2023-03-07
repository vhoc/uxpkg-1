import React, { HTMLAttributes } from 'react';
import { ITab } from '../../types';
export interface PolicyModalProps extends HTMLAttributes<HTMLDivElement> {
    /** The title of the modal */
    title: string;
    /** The caption (smaller and gray text below the title) */
    caption: string;
    /** Function to run when clicking on the View Full Detail button */
    onClickFullDetail?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Function to run when clicking on the Close button */
    onClickClose?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /** Style overrides for the modal container */
    style?: React.CSSProperties;
    /** Amount of resources in the list */
    resourcesAmount?: number | undefined;
    /** Amount of identities in the list */
    identitiesAmount?: number | undefined;
    /** The tabs and their contents */
    tabs: ITab[];
}
export declare const PolicyModal: ({ title, caption, onClickFullDetail, onClickClose, style, tabs, }: PolicyModalProps) => JSX.Element;
