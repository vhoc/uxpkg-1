import React, { HTMLAttributes, ReactNode } from "react";
import { colors } from "../../theme";
import { Typography } from "./Typography";
import { IconButton } from "./IconButton";
import { faTrash, faPen } from "@fortawesome/pro-solid-svg-icons";
import { styled } from '@mui/material/styles';

export interface SummaryResourceCardProps extends HTMLAttributes<HTMLDivElement> {
    resourceIcon?: any,
    resourceName: string,
    resourceType: string,
    accountName: string,
    region: string,
    children?: ReactNode | undefined
    isEditButtonEnabled: boolean
    onClickEditButton?: React.MouseEventHandler<HTMLButtonElement> | undefined
    onClickDeleteButton?: React.MouseEventHandler<HTMLButtonElement> | undefined
    isDeleteButtonEnabled: boolean
    style?: React.CSSProperties | undefined
}

export const SummaryResourceCard = ({resourceIcon, resourceName, resourceType, accountName, region, children, isEditButtonEnabled = true, isDeleteButtonEnabled = true, onClickEditButton, onClickDeleteButton, style}: SummaryResourceCardProps): JSX.Element => {

    const MyDiv = styled('div')({
        overflowY: 'auto',
        '&::-webkit-scrollbar' : {
            width: '4px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: colors.gray[10],
            borderRadius: '3px',
            //'-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: colors.gray[50],
            borderRadius: '3px',
            //outline: '1px solid slategrey'
        }
    })
    
    return (
        <div
            style={{
                backgroundColor: colors.white,
                display: 'flex',
                justifyContent: 'space-between',
                padding: '16px',
                minWidth: '640px',
                minHeight: '88px',
                border: `1px solid ${colors.gray[20]}`,
                borderRadius: '4px',
                ...style
            }}
        >

            {/** LEFT SECTION */}
            <div style={{ display: 'flex', gap: '12px', }}>

                {/** Resource Icon */}
                <div style={{ width: '34px', fontSize: '10px', textAlign: 'center', }}>
                    {resourceIcon}
                </div>

                {/** Resource Info */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography
                        variant={'title-regular'}
                        style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '210px',
                            textAlign: 'left',
                        }}
                    >
                        {resourceName}
                    </Typography>

                    <Typography
                        variant={'body-regular'}
                        style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '210px',
                            textAlign: 'left',
                        }}
                    >
                        {resourceType}
                    </Typography>

                    <Typography
                        variant={'caption-regular'}
                        style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '210px',
                            textAlign: 'left',
                        }}
                    >
                        {`${accountName} / ${region}`}
                    </Typography>
                </div>

            </div>

            {/** RIGHT SECTION */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px', }}>

                {/** CHILDREN: Roles */}
                <MyDiv
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        width: '280px',
                        maxHeight: '245px',
                        paddingRight: '4px',
                        overflowX: 'hidden',
                    }}
                >
                    {children}
                </MyDiv>


                {/** Edit and Delete buttons */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '4px'
                    }}
                >
                    <IconButton
                        variant={'gray'}
                        icon={faTrash}
                        disabled={!isDeleteButtonEnabled}
                        onClick={ isDeleteButtonEnabled ? onClickDeleteButton : undefined}
                        style={{
                            color : !isDeleteButtonEnabled ? '#8d94a1' : '#545b71'
                        }}
                    />
                    <IconButton
                        variant={'gray'}
                        icon={faPen}
                        disabled={!isEditButtonEnabled}
                        onClick={ isEditButtonEnabled ? onClickEditButton : undefined}
                        style={{
                            color : !isEditButtonEnabled ? '#8d94a1' : '#545b71'
                        }}
                    />
                </div>

            </div>

        </div>
    )

}

