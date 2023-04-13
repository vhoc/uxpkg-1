import React from 'react';
export interface PaginatorProps {
    /** Number of always visible pages at the beginning and end. */
    boundaryCount?: number | undefined;
    /** Override or extend the styles applied to the component. */
    classes?: object | undefined;
    /** The page selected by default when the component is uncontrolled. */
    defaultPage?: number | undefined;
    /** If true, the component is disabled. */
    disabled?: boolean;
    /** If true, hide the next-page button. */
    hideNextButton?: boolean;
    /** If true, hide the previous-page button. */
    hidePrevButton?: boolean;
    /** The total number of rows. To enable server side pagination for an unknown number of items, provide -1. */
    count?: number | undefined;
    /** The zero-based index of the current page. */
    page?: number | undefined;
    /**
     * Callback fired when the page is changed.
     *
     * **Signature:**
     * function(event: React.ChangeEvent<unknown>, page: number) => void
     * _event: The event source of the callback._
     * _page: The page selected._
     */
    onChange?: (event: React.ChangeEvent<unknown>, page: number) => void | undefined;
    /** If true, show the first-page button. */
    showFirstButton?: boolean;
    /** If true, show the last-page button. */
    showLastButton?: boolean;
    /** Number of always visible pages before and after the current page. */
    siblingCount?: number | undefined;
}
export declare const Paginator: ({ boundaryCount, classes, count, page, defaultPage, disabled, hideNextButton, hidePrevButton, showFirstButton, showLastButton, siblingCount, onChange }: PaginatorProps) => JSX.Element;
