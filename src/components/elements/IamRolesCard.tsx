import React, { HTMLAttributes } from "react"
import { colors, theme } from "../../theme"

export interface IamRolesCardProps extends HTMLAttributes<HTMLDivElement> {
    selected?: boolean
    expanded?: boolean
    title: string
    description?: string | undefined
    onClickButtonTopRight?: React.MouseEventHandler<HTMLDivElement> | undefined
    onClickButtonBottomLeft?: React.MouseEventHandler<HTMLDivElement> | undefined
    style?: React.CSSProperties
}

const IamRolesCard = ({selected = false, expanded = false, title, description, onClickButtonTopRight, onClickButtonBottomLeft, style, ...props}: IamRolesCardProps): JSX.Element => {

    return (
        <div
            style={{
                width: '605px',
                minHeight: '72px',
                backgroundColor: selected ? colors.blue[30] : colors.white,
                borderWidth: '1px',
                borderColor: colors.gray[20],
                borderRadius: '8px',
                paddingTop: '14px',
                paddingBottom: '22px',
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
            <>
            {/** LEFT PANE (MAIN) */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >

                </div>

                {/** RIGHT PANE */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >

                </div>
            </>
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
                    <div style={{ ...theme.font.body.semiBold }}>{ title }</div>
                    <div
                        style={{
                            ...theme.font.caption.regular,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '400px',
                        }}
                    >
                        { description }
                    </div>
                </div>

                {/** NON-EXPANDED MIDDLE PANE */}
                <div style={{ display: 'flex', }}>
                    <div
                        style={{ width: '60px', }}
                    >
                        more btn here
                    </div>

                    {/** NON-EXPANDED RIGHT PANE */}
                    <div
                        style={{ width: '34px', }}
                    >
                        topRightBtn here
                    </div>
                </div>
            </div>
        }
            
        

        </div>
    )

}

export default IamRolesCard