import React, { HTMLAttributes, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/pro-solid-svg-icons'
import { colors } from '../../theme'
import { Typography } from './Typography'
import { FilterBarItem } from './FilterBarItem'
import { SelectDropDown, SelectDropDownItemProps } from './SelectDropDown'
import { TextInput } from './TextInput'
import { Button } from './Button'

export interface ApprovalModalProps extends HTMLAttributes<HTMLDivElement> {
    /** Title of the modal */
    title?: string | undefined
    /** Option to auto-approve future requests */
    autoApprove?: boolean
    /** Comments */
    comments?: string | undefined
    /** End date value (for auto-aproval) */
    endDateValue?: any
    /** End date options (SelectDropDownItemProps[]) */
    endDateOptions?: SelectDropDownItemProps[] | undefined
    /** timeValue interval (for auto-approval) */
    timeValue?: any
    /** timeValue options (SelectDropDownItemProps[]) */
    timeOptions?: SelectDropDownItemProps[] | undefined
    /** onCommentsChange event */
    onCommentsChange?: ((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void) | undefined
    /** onClick Cancel button event */
    onClickCancel?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** onClick Approve button event */
    onClickApprove?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Style overrides */
    style?: React.CSSProperties | undefined
}

export const ApprovalModal = ({ title, autoApprove = false, comments, endDateValue, endDateOptions, timeValue, timeOptions, onCommentsChange, onClickCancel, onClickApprove, style }: ApprovalModalProps): JSX.Element => {

    const [auto, setAuto] = useState<boolean>(autoApprove)

    return (
        <div
            style={{
                width: '584px',
                height: 'auto',
                paddingTop: '31px',
                paddingRight: '31px',
                paddingBottom: '24px',
                paddingLeft: '31px',
                display: 'flex',
                flexDirection: 'column',
                gap: '28px',
                backgroundColor: colors.white,
                borderRadius: '8px',
                boxShadow: '0px 2px 4px rgba(34, 41, 69, 0.37)',
                ...style,
            }}
        >

            {/** ROW 1: ICON & TITLE */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                }}
            >
                <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    //size={'md'}
                    color={colors.yellow[50]}
                    style={{
                        backgroundColor: 'rgba(216, 160, 50, 0.1)',
                        borderRadius: '100%',
                        padding: '6px',
                    }}
                />
                <Typography
                    variant={'h4-medium'}
                    style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100%',
                    }}
                >
                    { title }
                </Typography>
            </div>

            {/** ROW 2: AUTO-APPROVE OPTION */}
            <FilterBarItem
                checked={auto}
                onClick={() => {
                    setAuto(prevState => !prevState)
                }}
                name={'Auto approve future requests with the same configuration'}
            />

            {/** ROW 3: [CONDITIONALLY RENDERED] AUTO-APPROVE OPTIONS */}
            {
                auto ?
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                        }}
                    >
                        {/** ROW 3.1: AUTO-APPROVE OPTION TITLE */}
                        <Typography variant={'h4-regular'}>Auto approve until</Typography>

                        {/** ROW 3.2: DATE & timeValue CONTROLS */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '31px',
                            }}
                        >
                            <SelectDropDown
                                label="End Date"
                                menuItems={endDateOptions}
                                value={endDateValue}
                                style={{ width: '198px' }}
                            />
                            <SelectDropDown
                                label="Time"
                                menuItems={timeOptions}
                                value={timeValue}
                                style={{ width: '146px' }}
                            />
                        </div>

                    </div>
                :
                    null
            }

            {/** ROW 4: COMMENTS */}
            <TextInput
                label={'Add comments'}
                multiline={true}
                rows={2}
                onChange={onCommentsChange}
                value={comments}
            />
            
            {/** ROW 5: BUTTONS */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '16px',
                }}
            >
                <Button
                    size="sm"
                    variant="gray"
                    onClick={onClickCancel}
                >
                    Cancel
                </Button>
                <Button
                    size="sm"
                    variant="grayBlue"
                    onClick={onClickApprove}
                >
                    Approve
                </Button>
            </div>

        </div>
    )

}