import React, { HTMLAttributes } from "react";
import { colors } from "../../theme";
import { Typography } from "./Typography";
import { IconButton } from "./IconButton";
import { faTrash, faPen } from "@fortawesome/pro-solid-svg-icons";
import { styled } from '@mui/material/styles';
import { LabelProps } from "./Label";

export interface SummaryResourceCardProps extends HTMLAttributes<HTMLDivElement> {
    /** The icon to be shown at the top left of the card. Free for any type. */
    resourceIcon?: any,
    /** The name of the resource shown. */
    resourceName: string,
    /** The type of the resource. */
    resourceType: string,
    /** The name of the account. */
    accountName: string,
    /** the account region. */
    region: string,
    /** Content of the card (Labels). Only Label children are allowed. */
    children?: React.ReactElement<LabelProps> | Array<React.ReactElement<LabelProps>> | undefined
    /** Whether to show the action buttons or not. */
    actionButtons?: boolean
    /** Enables or disables the edit button. */
    isEditButtonEnabled: boolean
    /** Function to run when clicking on the Edit button. */
    onClickEditButton?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Function to run when clicking on the Delete button. */
    onClickDeleteButton?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Enables or disables the Delete button. */
    isDeleteButtonEnabled: boolean
    /** Container style overrides. */
    style?: React.CSSProperties | undefined
}

export const SummaryResourceCard = ({resourceIcon, resourceName, resourceType, accountName, region, children, actionButtons = true, isEditButtonEnabled = true, isDeleteButtonEnabled = true, onClickEditButton, onClickDeleteButton, style}: SummaryResourceCardProps): JSX.Element => {

    const MyDiv = styled('div')({
        overflowY: 'auto',
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
                backgroundColor: colors.white,
                display: 'flex',
                justifyContent: 'space-between',
                padding: '16px',
                width: '100%',
                minWidth: '780px',
                minHeight: '88px',
                border: `1px solid ${colors.gray[20]}`,
                borderRadius: '4px',
                ...style
            }}
        >

            {/** LEFT SECTION */}
            <div style={{ display: 'flex', gap: '12px', width: '50%' }}>

                {/** Resource Icon */}
                <div style={{ width: '34px', fontSize: '10px', textAlign: 'center', }}>
                    {resourceIcon}
                </div>

                {/** Resource Info */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: 'calc(100% - 40px)',
                    }}
                >
                    <Typography
                        variant={'title-regular'}
                        style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '100%',
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
                            maxWidth: '100%',
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
                            maxWidth: '100%',
                            textAlign: 'left',
                        }}
                    >
                        {`${accountName} ${ region ? `/ ${region}` : '' }`}
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
                {
                    actionButtons ?
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                gap: '4px',
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
                    :
                        <div
                            style={{
                                width: '78px',
                            }}
                        ></div>
                }
                

            </div>

        </div>
    )

}

