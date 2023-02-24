import React, { HTMLAttributes } from "react";

export interface ProcyonShieldProps extends HTMLAttributes<HTMLDivElement> {
    width?: string
    height?: string
}

export const ProcyonShield = ({ width = '22', height = '23', ...props }: ProcyonShieldProps) => {
  return (
    <div
        {...props}
    >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill="#D8DDE4" fillRule="nonzero" transform="translate(-16 -16)">
            <g transform="translate(16 16)">
                <path d="M21.794 3.362A19.249 19.249 0 0010.907 0 19.25 19.25 0 00.02 3.362a20.376 20.376 0 00.132 3.38 17.132 17.132 0 012.61-1.809V4.93a16.505 16.505 0 017.473-2.122h.024a11.156 11.156 0 01.379-.011h.084a13.51 13.51 0 01.37 0h.066a11.58 11.58 0 01.397.011h.024a15.257 15.257 0 01.865.058c2.327.214 4.57.914 6.608 2.064v.003c.925.52 1.798 1.126 2.61 1.808a20.453 20.453 0 00.132-3.38zm-2.9 3.33a17.182 17.182 0 01-2.432 6.705 17.02 17.02 0 01-5.555 5.522 17.026 17.026 0 01-5.556-5.522A17.19 17.19 0 012.92 6.692a17.047 17.047 0 00-2.5 1.676c1.249 6.039 5.19 11.07 10.488 13.734 5.298-2.664 9.24-7.696 10.488-13.735a17.104 17.104 0 00-2.5-1.675z"></path>
                <path d="M14.866 8.754a1.06 1.06 0 01-.501.146h-.069-.001c-1.575.018-2.846 1.322-2.846 2.928 0 .519.133 1.006.366 1.428l.043.076c.078.152.122.323.122.505 0 .602-.48 1.091-1.073 1.091a1.082 1.082 0 01-1.073-1.09 1.099 1.099 0 01.165-.582c.233-.422.365-.91.365-1.428 0-1.606-1.27-2.91-2.845-2.928h-.07a1.06 1.06 0 01-.501-.146 1.101 1.101 0 01-.393-1.49 1.063 1.063 0 011.88.039 2.87 2.87 0 002.472 1.425A2.87 2.87 0 0013.42 7.23a1.063 1.063 0 011.838.033c.297.522.12 1.19-.392 1.49z"></path>
                <path d="M11.858 13.332l-.044-.076a.81.81 0 01.044.076zM10.907 6.89c.593 0 1.073-.488 1.073-1.09 0-.603-.48-1.091-1.073-1.091-.592 0-1.073.488-1.073 1.09 0 .603.48 1.092 1.073 1.092z"></path>
                <path d="M10.907 6.89c.593 0 1.073-.488 1.073-1.09 0-.603-.48-1.091-1.073-1.091-.592 0-1.073.488-1.073 1.09 0 .603.48 1.092 1.073 1.092zM7.484 12.919c.593 0 1.073-.489 1.073-1.091 0-.603-.48-1.091-1.073-1.091-.592 0-1.072.488-1.072 1.09 0 .603.48 1.092 1.072 1.092zM14.364 8.9h-.068.068zM14.33 12.919c.592 0 1.072-.489 1.072-1.091 0-.603-.48-1.091-1.073-1.091-.592 0-1.072.488-1.072 1.09 0 .603.48 1.092 1.072 1.092zM7.518 8.9H7.45h.069z"></path>
            </g>
            </g>
        </g>
        </svg>
    </div>
  );
}