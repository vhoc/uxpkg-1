import React from 'react'
import { SelectDropDownItemProps } from './SelectDropDown'
import { colors } from '../../theme'
import { Typography } from './Typography'
import { SimpleDropDown } from './SimpleDropDown'

export interface PickListHeadingProps {
    /** Number of existing items in the list */
    title?: string | undefined
    /** Dropdown of options */
    dropDownItems: SelectDropDownItemProps[]
    /** Dropdown selected value (Controlled component) */
    dropDownValue?: any
    /** Style overrides */
    style?: React.CSSProperties | undefined
    /** onChange event that will be drilled into the internal SimpleDropDown component */
    onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

export const PickListHeading = ({ title, dropDownItems, dropDownValue, style, onChange }: PickListHeadingProps): JSX.Element => {

    return (
        <div
            style={{
                minWidth: 'fit-content',
                height: '32px',
                backgroundColor: colors.gray[10],
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: colors.gray[20],
                borderTopLeftRadius: '4px',
                borderTopRightRadius: '4px',
                borderBottomLeftRadius: '0px',
                borderBottomRightRadius: '0px',
                paddingLeft: '16px',
                paddingRight: '8px',
                paddingTop: '4px',
                paddingBottom: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                ...style,
            }}
        >
            <Typography variant={'breadcrumbLink'} >{ title }</Typography>

            {
                dropDownItems && dropDownItems.length >= 1 ?
                    <SimpleDropDown
                        menuItems={dropDownItems}
                        value={dropDownValue}
                        onChange={onChange}
                    />
                :
                    null
            }
        </div>
    )

}