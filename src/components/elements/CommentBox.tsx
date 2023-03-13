import React, { HTMLAttributes } from 'react'
import { colors } from '../../theme'
import { Typography } from './Typography'

export interface CommentBoxProps extends HTMLAttributes<HTMLDivElement> {
    /** The title of the comment (at the top of the box) */
    title?: string | undefined
    /** Date and time of the comment. Top-right corner */
    timestamp?: string | undefined
    /** Comment body */
    comment?: string | undefined
    /** Style overrides */
    style?: React.CSSProperties | undefined
}

export const CommentBox = ({title, timestamp, comment, style}: CommentBoxProps): JSX.Element => {

    return (
        <div
            style={{
                backgroundColor: colors.blue[5],
                borderRadius: '8px',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: colors.blue[20],
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '16px',
                paddingBottom: '24px',
                paddingLeft: '24px',
                paddingRight: '24px',
                width: '100%',
                minWidth: '583px',
                gap: '14px',
                ...style,
            }}
        >

            {/** TOP ROW */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    gap: '24px',
                }}
            >
                <Typography
                    variant={'h4-medium'}
                    style={{
                        width: '70%',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant={'breadcrumbLink'}
                    style={{
                        color: colors.gray[40],
                        width: 'fit-content',
                    }}
                >
                    {timestamp}
                </Typography>
            </div>

            {/** BOTTOM ROW */}
            <Typography variant={'inputText-typed'}>
                {comment}
            </Typography>

        </div>
    )

}