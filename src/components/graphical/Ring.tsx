import React, { HTMLAttributes } from "react";

export interface RingProps extends HTMLAttributes<HTMLDivElement> {
    /** Width of the ring. */
    width?: string
    /** Height of the ring. */
    height?: string
}

export const Ring = ({ width = '53', height = '53', ...props }: RingProps) => {
  return (
    <div
        {...props}
    >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        >
        <defs>
            <pattern
            id="pattern-1"
            width="100%"
            height="100%"
            patternUnits="objectBoundingBox"
            >
            <use xlinkHref="#image-2"></use>
            </pattern>
            <image
            id="image-2"
            width={width}
            height={height}
            xlinkHref="data:image/png;base64,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"
            ></image>
        </defs>
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill="url(#pattern-1)">
            <path d="M26.5 0C41.136 0 53 11.864 53 26.5S41.136 53 26.5 53 0 41.136 0 26.5 11.864 0 26.5 0zm0 4C14.074 4 4 14.074 4 26.5S14.074 49 26.5 49 49 38.926 49 26.5 38.926 4 26.5 4z"></path>
            </g>
        </g>
        </svg>
    </div>
  );
}