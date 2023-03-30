import React, { HTMLAttributes, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/pro-solid-svg-icons'
import { colors } from '../../theme'
import { Typography } from './Typography'
import { FilterBarItem } from './FilterBarItem'
import { SelectDropDown, SelectDropDownItemProps } from './SelectDropDown'
import { TextInput } from './TextInput'
import { Button } from './Button'
import { SelectChangeEvent } from '@mui/material'

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
    onCommentsChange?: ((value: string) => void) | undefined
    /** Function to trigger when the End Date is changed. */
    onEndDateChange?: ((value: any) => void) | undefined
    /** Function to trigger when the Time is changed. */
    onTimeChange?: ((value: any) => void) | undefined
    /** onClick Cancel button event */
    onClickCancel?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** onClick Approve button event */
    onClickApprove?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Style overrides */
    style?: React.CSSProperties | undefined
    /** autoApprove handler */
    onAutoApproveChange?: (value: boolean) => void | undefined
}

export const ApprovalModal = ({ title, autoApprove = false, comments, endDateValue, endDateOptions, timeValue, timeOptions, onCommentsChange, onEndDateChange, onTimeChange, onClickCancel, onClickApprove, style, onAutoApproveChange }: ApprovalModalProps): JSX.Element => {

    const [auto, setAuto] = useState<boolean>(autoApprove)
    //const [endDateState, setEndDateState] = useState<any>(endDateValue)
    //const [timeState, setTimeState] = useState<any>(timeValue)
    //const [commentsState, setCommentsState] = useState<string | undefined>(comments)

    const handleAutoApproveChange = () => {
        setAuto(prevState => !prevState)
    }

    const handleEndDateChange = (event: SelectChangeEvent) => {
        //setEndDateState(event.target.value as string)
        if (onEndDateChange) {
            onEndDateChange(event.target.value)
        }
    }

    const handleTimeChange = (event: SelectChangeEvent) => {
        //setTimeState(event.target.value as string)
        if (onTimeChange) {
            onTimeChange(event.target.value)
        }
    }

    const handleCommentsChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        //setCommentsState(event.target.value)
        if (onCommentsChange) {
            onCommentsChange(event.target.value)
        }
    }

    useEffect(() => {
        if (onAutoApproveChange) { onAutoApproveChange(auto) }
    }, [auto])

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
                onClick={handleAutoApproveChange}
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
                                onChange={handleEndDateChange}
                            />
                            <SelectDropDown
                                label="Time"
                                menuItems={timeOptions}
                                value={timeValue}
                                style={{ width: '146px' }}
                                onChange={handleTimeChange}
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
                onChange={handleCommentsChange}
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