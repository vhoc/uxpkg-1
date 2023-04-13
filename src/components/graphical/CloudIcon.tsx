import React from 'react'
import imgAwsColor from '../../assets/icons/aws-color-18px.png'
import imgGoogleColor from '../../assets/icons/google-color-18px.png'
import imgAzureColor from '../../assets/icons/azure-color-18px.png'
import imgPrivate from '../../assets/icons/private-color-18px.png'

export interface CloudIconProps {
    /** The type of the icon (Cloud service) */
    type: 'aws' | 'gcp' | 'azure' | 'private'
    /** Style overrides */
    style?: React.CSSProperties | undefined
}

export const CloudIcon = ({ type, style }: CloudIconProps): JSX.Element => {

    const iconTable = {
        aws: imgAwsColor,
        gcp: imgGoogleColor,
        azure: imgAzureColor,
        private: imgPrivate,
    }

    type TypeKey = keyof typeof iconTable
    const selectedType = type as TypeKey

    return (
        <img
            src={iconTable[selectedType]}
            alt={iconTable[selectedType]}
            style={{
                ...style,
            }}
        />
    )
}