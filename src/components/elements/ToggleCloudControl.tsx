import React from 'react'
import { ToggleButtonGroup, ToggleButton, ToggleButtonGroupProps } from '@mui/material'
import { colors } from '../../theme'
import imgAwsColor from '../../assets/icons/aws-color-18px.png'
import imgAwsGray from '../../assets/icons/aws-gray-18px.png'
import imgGoogleColor from '../../assets/icons/google-color-18px.png'
import imgGoogleGray from '../../assets/icons/google-gray-18px.png'
import imgAzureColor from '../../assets/icons/azure-color-18px.png'
import imgAzureGray from '../../assets/icons/azure-gray-18px.png'

export interface ToggleCloudControlProps extends ToggleButtonGroupProps {
    //value: 'aws' | 'azure' | 'google'
    //multiSelect?: boolean
    value: string[] | string
    ariaLabel?: string | undefined
    onChange?: ((event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => void) | undefined
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
                //onClick={item.onClick}
                //onChange={item.onChange}
                //disabled={item.disabled || false}
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
                //selected={item.selected}
                //onClick={item.onClick}
                //onChange={item.onChange}
                //disabled={item.disabled || false}
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
                //selected={item.selected}
                //onClick={item.onClick}
                //onChange={item.onChange}
                //disabled={item.disabled || false}
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

        </ToggleButtonGroup>
    )   
}
