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

export const ToggleCloudControl = ({ ariaLabel = 'cloud control', multiSelect = false, value = [''], onChange  }: ToggleCloudControlProps): JSX.Element => {

    //const [values, setValues] = useState<string[] | string>(() => [''])

    //console.log(values)

    /*
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newValues: string[] | string,
    ) => {
        setValues(newValues)
    }*/

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
                value={'aws'}
                aria-label={'aws'}
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
                    ( value === 'aws' || (Array.isArray(value) && value.find((value) => value === 'aws')) ) ?
                        imgAwsColor
                    :
                        imgAwsGray
                } alt={'AWS'} />
            </ToggleButton>

            <ToggleButton
                value={'google'}
                aria-label={'google'}
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
                <img src={ ( value === 'google' || (Array.isArray(value) && value.find((value) => value === 'google')) )? imgGoogleColor : imgGoogleGray} alt={'Google'} />
            </ToggleButton>

            <ToggleButton
                value={'azure'}
                aria-label={'azure'}
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
                <img src={ ( value === 'azure' || (Array.isArray(value) && value.find((value) => value === 'azure')) ) ? imgAzureColor : imgAzureGray} alt={'Azure'} />
            </ToggleButton>

        </ToggleButtonGroup>
    )   
}
