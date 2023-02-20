import React, { useState } from 'react'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ISegmentedControlItem } from '../../types'
import { colors } from '../../theme'

export interface SegmentedControlProps {
    //children: ReactNode
    /**
     * Item object Props:  
     * - value: string  
     * - ariaLabel: string  
     * - icon: IconProp | ReactNode  
     * - selected: boolean  
     * - onClick: (event: React.MouseEvent<HTMLElement>, value: any) => void  
     * - onChange: (event: React.MouseEvent<HTMLElement>, value: any) => void  
     * - disabled: boolean  
     */
    items: ISegmentedControlItem[]
    multiSelect?: boolean
    ariaLabel: string
}

export const SegmentedControl = ({ items, multiSelect = false, ariaLabel = 'segmented control', }: SegmentedControlProps): JSX.Element => {

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
                            selected={item.selected}
                            onClick={item.onClick}
                            onChange={item.onChange}
                            disabled={item.disabled || false}
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