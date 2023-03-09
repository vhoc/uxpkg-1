import React, { HTMLAttributes } from 'react'
import { styled } from '@mui/material/styles';
import { colors } from '../../theme';
import { Typography } from './Typography';

export interface PageButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** Number of the page in the button */
    pageNumber: number
    /** onClick event function */
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Style overrides */
    style?: React.CSSProperties | undefined
    /** Selected state (for current page) */
    selected: boolean,
}

export const PageButton = ({ pageNumber, onClick, style, selected = false }: PageButtonProps): JSX.Element => {

    const MyButton = styled('button')({
        minWidth: '34px',
        height: '34px',
        backgroundColor: selected ? colors.blue[5] : colors.white,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: selected ? colors.blue[40] : colors.gray[20],
        borderRadius: '4px',
        paddingTop: '6px',
        paddingBottom: '6px',
        paddingLeft: '12px',
        paddingRight: '12px',
        '&:hover': {
            backgroundColor: colors.blue[5],
            borderColor: colors.blue[30],
        },
        ...style,
    })

    return (
        <MyButton
            onClick={onClick}
        >
            <Typography variant={'body-regular'} style={{ color: selected ? colors.blue[60] : colors.gray[70] }}>{ pageNumber.toString() }</Typography>
        </MyButton>
    )

}