import React, { HTMLAttributes, ReactNode } from 'react'
import { Typography } from './Typography'
import { colors } from '../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/pro-solid-svg-icons'
import { styled } from '@mui/material/styles'

export interface PickListContainerProps extends HTMLAttributes<HTMLDivElement> {
    /** Content of the PickListContainer. */
    children?: ReactNode
    /** CSS Style overrides. */
    style?: React.CSSProperties | undefined
}

export const PickListContainer = ({ children, style, }: PickListContainerProps): JSX.Element => {

    const MyDiv = styled('div')({        
        overflowY: 'auto',
        overflowX: 'hidden',
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
        <MyDiv
            style={{
                width: '396px',
                minHeight: '230px',
                backgroundColor: colors.gray[5],
                borderColor: colors.gray[20],
                borderStyle: 'solid',
                borderWidth: '1px',
                borderTopLeftRadius: '0px',
                borderTopRightRadius: '0px',
                borderBottomLeftRadius: '4px',
                borderBottomRightRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: children ? 'flex-start' : 'center',
                ...style,
            }}
        >
        {
            children ?
                children
            :
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '50%',
                        minWidth: '176px',
                        gap: '6px',
                    }}
                >
                    <FontAwesomeIcon
                        icon={faPlusCircle}
                        color={colors.gray[20]}
                        size={'lg'}
                    />
                    <Typography
                        variant={'breadcrumbLink'}
                        style={{ 
                            color: colors.gray[40],
                            textAlign: 'center',
                        }}
                    >
                        Drag & drop existing users and groups or 
                        click the + icon to add them to this policy
                    </Typography>
                </div>
        }
        </MyDiv>
    )

}