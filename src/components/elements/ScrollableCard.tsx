import React, { HTMLAttributes, ReactNode } from 'react'
import { colors, theme } from '../../theme'
import { Typography } from './Typography'
import { styled } from '@mui/material/styles';

export interface ScrollableCardProps extends HTMLAttributes<HTMLDivElement> {
    /** Title of the card that will show at the top of it */
    title?: string | undefined
    /** A string description that will be shown in a fixed section just below the title.` */
    description?: string | undefined
    /** Scrollable content that can be any component or element. */
    content?: ReactNode | undefined
    /** Style overrides */
    style?: React.CSSProperties | undefined
}

export const ScrollableCard = ({ title, description, content, style }: ScrollableCardProps): JSX.Element => {

    const MyDiv = styled('div')({
        overflowY: 'auto',
        overflowX: 'auto',
        '&::-webkit-scrollbar' : {
            width: '4px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: colors.gray[10],
            borderRadius: '3px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: colors.gray[50],
            borderRadius: '3px',
        }
    })

    return (
        <div
            style={{
                minHeight: '150px',
                backgroundColor: colors.white,
                borderWidth: '1px',
                borderColor: colors.gray[20] || '#D8DDE4 !important',
                borderRadius: '8px',
                borderStyle: 'solid',
                paddingTop: '14px',
                paddingBottom: '16px',
                paddingLeft: '24px',
                paddingRight: '16px',
                display: 'flex',
                flexDirection: 'column',
                fontFamily: theme.font.body.regular.fontFamily,
                fontSize: theme.font.body.regular.fontSize,
                fontWeight: theme.font.body.regular.fontWeight,
                color: theme.font.body.regular.color,
                ...style
            }}
        >
        
            {/** TITLE ROW */}
            <Typography
                variant={'body-semiBold'}
                style={{
                    color: colors.gray[90],
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%',
                    minHeight: '24px', // Why was this needed in conjuction with overflow: hidden? No idea.
                }}
                >
                    { title }
            </Typography>

            {/** DESCRIPTION ROW */}
            <Typography variant={'caption-regular'}>{ description }</Typography>

            {/** CONTENT ROW */}
            <MyDiv
                style={{
                    ...theme.font.caption.regular,
                    width: '100%',
                    textAlign: 'left',
                }}
            >
                { content }
            </MyDiv>

        </div>
    )

}