import React, { HTMLAttributes, useState, ReactNode } from "react"
import { colors, theme } from "../../theme"
import RoundedToggleButton from "./RoundedToggleButton"
import { faCaretUp, faCaretDown, faCirclePlus, faCircleMinus } from "@fortawesome/sharp-solid-svg-icons";
import IconButton from "./IconButton";
import { Button } from "./Button";
import { styled } from '@mui/material/styles';

export interface IamRolesCardProps extends HTMLAttributes<HTMLDivElement> {
    /** Whether the card is selected or not. */
    selected?: boolean
    /** Whether the card's role has been assigned or not. */
    assigned?: boolean
    /** The title text at the top of the card */
    title: string
    /** De description text below the title */
    description?: string | undefined
    /** Callback function assigned to the top-right button (+) */
    onClickButtonTopRight?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Callback function assigned to the bottom-left "Open in new tab" button */
    onClickButtonBottomLeft?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Optional styling overrides. */
    style?: React.CSSProperties
    /** The children inside the collapsable card. Anything goes. */
    children?: ReactNode | undefined
}

const MyDiv = styled('div')({
    overflowY: 'scroll',
    '&::-webkit-scrollbar' : {
        width: '4px',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: colors.gray[10],
        borderRadius: '3px',
        //'-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: colors.gray[50],
        borderRadius: '3px',
        //outline: '1px solid slategrey'
    }
})

export const IamRolesCard = ({selected = false, assigned = false, title, description, onClickButtonTopRight, onClickButtonBottomLeft, style, children, ...props}: IamRolesCardProps): JSX.Element => {

    const [ expanded, setExpanded ] = useState<boolean>(false)

    return (
        <div
            style={{
                width: '605px',
                maxWidth: '605px',
                minHeight: '72px',
                height: expanded ? '444px' : '72px',
                backgroundColor: selected ? colors.gray[5] : colors.white,
                borderWidth: '1px',
                borderColor: colors.gray[20],
                borderRadius: '8px',
                paddingTop: '14px',
                paddingBottom: expanded ? '16px' : '12px',
                paddingLeft: '24px',
                paddingRight: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: theme.font.body.regular.fontFamily,
                fontSize: theme.font.body.regular.fontSize,
                fontWeight: theme.font.body.regular.fontWeight,
                color: theme.font.body.regular.color,
                ...style
            }}
            {...props}
        >
        
        { /** EXPANDED RENDER */
            expanded ?
            <div
                style={{ display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%',
                }}
            >
                {/** TOP ROW (MAIN) */}
                
                <div>                
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div
                            style={{
                                ...theme.font.body.semiBold,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: '400px',
                                textAlign: 'left',
                            }}
                        >
                            { title }
                        </div>
                        <IconButton
                            style={{alignSelf: 'start' }}
                            icon={assigned ? faCircleMinus : faCirclePlus}
                            variant={assigned ? 'gray' : 'grayBlue'}
                            size={'sm'}
                            onClick={onClickButtonTopRight}
                        />
                    </div>

                    {/** MIDDLE (CONTENT) ROW */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '573px',// The middle section must have a fixed/maximum height for use with overflow
                        }}
                    >
                        {/** DESCRIPTION */}
                        <div
                            style={{
                                ...theme.font.caption.regular,
                                width: '509px',
                                maxWidth: '509px',
                                textAlign: 'left',
                            }}
                        >
                            { description }
                        </div>

                        {/** ReactNode Children */}
                        <MyDiv
                            style={{
                                ...theme.font.caption.regular,
                                width: '100%',
                                height: '280px',
                                paddingRight: '100px',
                                textAlign: 'left',
                            }}
                        >
                            { children }                            
                        </MyDiv>
                    </div>
                </div>

                {/** BOTTOM ROW */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        justifySelf: 'flex-end',
                        width: '509px',
                    }}
                >
                    <Button
                        variant="grayBlue"
                        size="sm"
                        onClick={onClickButtonBottomLeft}
                    >
                        Open in new tab
                    </Button>

                    <RoundedToggleButton
                        icon={expanded ? faCaretUp : faCaretDown}
                        label={expanded ? 'Less' : 'More'}
                        onClick={() => setExpanded(prevState => !prevState)}
                    />
                </div>
            </div>
            :
            <div
                style={{
                    width: '605px',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                {/** NON-EXPANDED LEFT PANE */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div
                        style={{
                            ...theme.font.body.semiBold,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '400px',
                            textAlign: 'left',
                        }}
                    >
                        { title }
                    </div>
                    <div
                        style={{
                            ...theme.font.caption.regular,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '400px',
                            textAlign: 'left',
                        }}
                    >
                        { description }
                    </div>
                </div>

                {/** NON-EXPANDED MIDDLE PANE */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', }}>
                    
                    <RoundedToggleButton
                        icon={expanded ? faCaretUp : faCaretDown}
                        label={expanded ? 'Less' : 'More'}
                        onClick={() => setExpanded(prevState => !prevState)}
                    />

                    {/** NON-EXPANDED RIGHT PANE */}
                    <IconButton
                        style={{ alignSelf: 'start' }}
                        icon={assigned ? faCircleMinus : faCirclePlus}
                        variant={assigned ? 'gray' : 'grayBlue'}
                        size={'sm'}
                        onClick={onClickButtonTopRight}
                    />
                </div>
            </div>
        }
            
        

        </div>
    )

}