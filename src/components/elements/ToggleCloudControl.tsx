import React from 'react'
import { ToggleButtonGroup, ToggleButton, ToggleButtonGroupProps } from '@mui/material'
import { colors } from '../../theme'
import imgAwsColor from '../../assets/icons/aws-color-18px.png'
import imgAwsGray from '../../assets/icons/aws-gray-18px.png'
import imgGoogleColor from '../../assets/icons/google-color-18px.png'
import imgGoogleGray from '../../assets/icons/google-gray-18px.png'
import imgAzureColor from '../../assets/icons/azure-color-18px.png'
import imgAzureGray from '../../assets/icons/azure-gray-18px.png'
import imgPrivateColor from '../../assets/icons/private-color-18px.png'
import imgPrivateGray from '../../assets/icons/private-gray-18px.png'

export interface ToggleCloudControlProps extends ToggleButtonGroupProps {
    /** The value of the control. */
    value: string[] | string
    /** Aria Label HTML property */
    ariaLabel?: string | undefined
    /** Function to run when changing the value. */
    onChange?: ((event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => void) | undefined
    /** Enables or disables the selection of multiple values. */
    multiSelect?: boolean
}

export const ToggleCloudControl = ({ ariaLabel = 'cloud control', multiSelect = false, value = ['AWS'], onChange  }: ToggleCloudControlProps): JSX.Element => {

    return (
        <ToggleButtonGroup
            value={value}
            exclusive={!multiSelect}
            onChange={onChange}
            aria-label={ariaLabel}
            sx={{
                height: '40px',
                borderWidth: '0px'
            }}
        >

            <ToggleButton
                value={'AWS'}
                aria-label={'AWS'}
                sx={{
                    backgroundColor: colors.gray[10],
                    paddingLeft: '14px',
                    paddingRight: '14px',
                    '&.Mui-selected': {
                        backgroundColor: colors.white,
                    },
                }}
            >
                <img src={
                    ( value === 'AWS' || (Array.isArray(value) && value.find((value) => value === 'AWS')) ) ?
                        imgAwsColor
                    :
                        imgAwsGray
                } alt={'AWS'} />
            </ToggleButton>

            <ToggleButton
                value={'GCP'}
                aria-label={'GCP'}
                sx={{
                    backgroundColor: colors.gray[10],
                    paddingLeft: '14px',
                    paddingRight: '14px',
                    '&.Mui-selected': {
                        backgroundColor: colors.white,
                    },
                }}
            >
                <img src={ ( value === 'GCP' || (Array.isArray(value) && value.find((value) => value === 'GCP')) )? imgGoogleColor : imgGoogleGray} alt={'GCP'} />
            </ToggleButton>

            <ToggleButton
                value={'AZURE'}
                aria-label={'AZURE'}
                sx={{
                    backgroundColor: colors.gray[10],
                    paddingLeft: '14px',
                    paddingRight: '14px',
                    '&.Mui-selected': {
                        backgroundColor: colors.white,
                    },
                }}
            >
                <img src={ ( value === 'AZURE' || (Array.isArray(value) && value.find((value) => value === 'AZURE')) ) ? imgAzureColor : imgAzureGray} alt={'AZURE'} />
            </ToggleButton>

            <ToggleButton
                value={'PRIVATE'}
                aria-label={'PRIVATE'}
                sx={{
                    backgroundColor: colors.gray[10],
                    paddingLeft: '14px',
                    paddingRight: '14px',
                    '&.Mui-selected': {
                        backgroundColor: colors.white,
                    },
                }}
            >
                <img src={ ( value === 'PRIVATE' || (Array.isArray(value) && value.find((value) => value === 'PRIVATE')) ) ? imgPrivateColor : imgPrivateGray} alt={'PRIVATE'} />
            </ToggleButton>

        </ToggleButtonGroup>
    )   
}
