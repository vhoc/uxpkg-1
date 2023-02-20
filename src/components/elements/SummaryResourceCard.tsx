import React, { HTMLAttributes, ReactNode } from "react";
import { colors } from "../../theme";
import { Typography } from "./Typography";
import { IconButton } from "./IconButton";
import { faTrash, faPen } from "@fortawesome/pro-solid-svg-icons";

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
}

export const SummaryResourceCard = ({resourceIcon, resourceName, resourceType, accountName, region, children, isEditButtonEnabled = true, isDeleteButtonEnabled = true, onClickEditButton, onClickDeleteButton, ...props}: SummaryResourceCardProps): JSX.Element => {
/**
 * TODO:
 * Roles children implementation and story
 * Edit and Delete buttons
 * Responsiveness, set min-max width of the whole component
 * Set max height of the component
 * Set overflow for the children roles
 * Set ellipsis no-wrap for resourceName and resourceTye
 */
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '16px',
                width: '688px',
                minHeight: '88px',
                border: `1px solid ${colors.gray[20]}`,
                borderRadius: '4px',
            }}
            {...props}
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
                    <Typography variant={'title-regular'}>{resourceName}</Typography>
                    <Typography variant={'body-regular'}>{resourceType}</Typography>
                    <Typography variant={'caption-regular'}>{`${accountName} / ${region}`}</Typography>
                </div>

            </div>

            {/** RIGHT SECTION */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px', }}>

                {/** CHILDREN: Roles */}
                <div
                    style={{ display: 'flex', flexDirection: 'column', gap: '4px', }}
                >
                    {children}
                </div>


                {/** Edit and Delete buttons */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '4px'
                    }}
                >
                    <IconButton variant={'gray'} icon={faTrash} disabled={!isEditButtonEnabled} onClick={ isEditButtonEnabled ? onClickEditButton : undefined}/>
                    <IconButton variant={'gray'} icon={faPen} disabled={!isDeleteButtonEnabled} onClick={ isDeleteButtonEnabled ? onClickDeleteButton : undefined}/>
                </div>

            </div>

        </div>
    )

}

