import React, { HTMLAttributes } from 'react'
import { SelectDropDownItemProps } from './SelectDropDown'
import { colors } from '../../theme'
import { Typography } from './Typography'
import { SimpleDropDown } from './SimpleDropDown'

export interface PickListHeadingProps extends HTMLAttributes<HTMLDivElement> {
    /** Number of existing items in the list */
    existingCount?: number | undefined
    /** Dropdown of options */
    dropDownItems: SelectDropDownItemProps[]
    /** Dropdown selected value (Controlled component) */
    dropDownValue?: any
    /** Style overrides */
    style?: React.CSSProperties | undefined
}

export const PickListHeading = ({ existingCount, dropDownItems, dropDownValue, style }: PickListHeadingProps): JSX.Element => {

    return (
        <div
            style={{
                width: '396px',
                height: '32px',
                backgroundColor: colors.gray[10],
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: colors.gray[20],
                borderTopLeftRadius: '0px',
                borderTopRightRadius: '0px',
                borderBottomLeftRadius: '4px',
                borderBottomRightRadius: '4px',
                paddingLeft: '16px',
                paddingRight: '8px',
                paddingTop: '4px',
                paddingBottom: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                ...style,
            }}
        >
            <Typography variant={'breadcrumbLink'} >{ `Existing (${existingCount?.toString() || '0'})` }</Typography>

            {
                dropDownItems && dropDownItems.length >= 1 ?
                    <SimpleDropDown
                        menuItems={dropDownItems}
                        value={dropDownValue}
                    />
                :
                    null
            }
        </div>
    )

}