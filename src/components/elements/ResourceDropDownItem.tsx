import React, { HTMLAttributes } from 'react'
import { Typography } from './Typography'
import { colors } from '../../theme'

export interface ResourceDropDownItemProps extends HTMLAttributes<HTMLDivElement> {
    /** Value to control the DropDown */
    //value?: string | undefined
    /** Upper text (resource name) */
    resourceName: string
    /** Lower text */
    resourceType: string
    /** Icon element (Resource icon) */
    icon: any
    /** The default selected value if any. */
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
    /** Style overrides */
    style?: React.CSSProperties | undefined
}

export const ResourceDropDownItem = ({ resourceName, resourceType, icon, onClick, style,  }: ResourceDropDownItemProps): JSX.Element => {

    return (
        <div
            style={{
                minWidth: '217px',
                width: '217px',
                backgroundColor: colors.white,
                paddingTop: '8px',
                paddingBottom: '8px',
                paddingLeft: '12px',
                paddingRight: '12px',
                display: 'flex',
                justifyContent: 'flex-start',
                boxSizing: 'border-box',
                cursor: 'pointer',
                gap: '10px',
                ...style,
            }}
            onClick={onClick}
        >
            {/** LEFT (Icon Element) */}
            <div
                style={{
                    width: '20px',
                    minWidth: '20px',
                    maxWidth: '20px',
                    borderRadius: '4px',
                }}
            >
                {icon ? icon : null}
            </div>

            {/** RIGHT */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    width: '100%',
                }}
            >

                <Typography
                    variant={'breadcrumbLink'}
                    color={ colors.gray[90]}
                    style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '95%',
                    }}
                >
                    {resourceName}
                </Typography>
                <Typography
                    variant={'breadcrumbLink'}
                    color={ colors.gray[70]}
                    style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '95%',
                    }}
                >
                    {resourceType}
                </Typography>

            </div>


        </div>
    )

}
