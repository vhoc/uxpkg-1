import React, { useState } from 'react'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ISegmentedControlItem } from '../../types'
import { colors } from '../../theme'

export interface SegmentedControlProps {
    //children: ReactNode
    /**
     * items' icon can be either a ReactNode or an IconProp.
     */
    items: ISegmentedControlItem[]
    multiSelect?: boolean
    ariaLabel: string
}

const SegmentedControl = ({ items, multiSelect = false, ariaLabel = 'segmented control' }: SegmentedControlProps): JSX.Element => {

    const [value, setValue] = useState<string | null>('')

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newValue: string | null,
    ) => {
        setValue(newValue)
    }

    if (items && items.length >= 1) {
        return (
            <ToggleButtonGroup
                value={value}
                exclusive={!multiSelect}
                onChange={handleChange}
                aria-label={ariaLabel}
                sx={{
                    borderWidth: '0px'
                }}
            >
            {
                items.map((item: any, index: number) => {
                    return (
                        <ToggleButton
                            key={index}
                            value={item.value}
                            aria-label={item.ariaLabel}
                            sx={{
                                backgroundColor: colors.gray[10],
                                paddingLeft: '14px',
                                paddingRight: '14px',
                                '&.Mui-selected': {
                                    backgroundColor: colors.white,
                                },
                            }}
                        >
                        {
                            React.isValidElement(item.icon) ?
                                ( item.icon )
                            :
                                <FontAwesomeIcon icon={item.icon}/>
                        }
                            
                        </ToggleButton>
                    )
                })
            }
            </ToggleButtonGroup>
        )
    }

    return (
        <div></div>
    )


    

}

export default SegmentedControl