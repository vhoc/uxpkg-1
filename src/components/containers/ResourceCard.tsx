import React, { HTMLAttributes } from "react"
import { View } from "../layout/View"
import { colors } from '../../theme'

export interface Props extends HTMLAttributes<HTMLDivElement> {
}

export const ResourceCard = ({...props}: Props) => {
    return (
        <View
            radius="4px"
            borderColor={colors.blue[20]}
            borderStyle={'solid'}
            borderWidth={'1px'}
            backgroundColor={colors.white}
            padding={'16px 16px 16px 24px'}
        >
            <div {...props}>
                
            </div>
        </View>
    )
}