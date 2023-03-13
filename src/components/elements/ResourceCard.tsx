import React, { CSSProperties, HTMLAttributes } from "react"
import { View } from "../layout/View"
import { IconButton } from "./IconButton"
import { DropDownButton } from "./DropDownButton"
import { Label } from "./Label"
import { IDropDownItem } from '../../util/sample-data'
import { Button } from "./Button"
import { faBookmark } from "@fortawesome/sharp-solid-svg-icons"
import { theme, colors, IVariant } from "../../theme"

export interface ResourceCardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'primary'
    accessState: 'access' | 'requested' | 'signIn' | 'waiting'
    resourceIcon?: JSX.Element | null
    bookmarked: boolean
    onBookmarkClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    onMoreInfoClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    onAccessClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    resourceName: string
    resourceType: string
    accountName: string
    region: string,
    dropDownItems?: IDropDownItem[] | undefined
    dotMenuItems?: IDropDownItem[] | undefined
    width?: string | undefined
    style?: CSSProperties | undefined
}

export const ResourceCard = ({ variant = 'primary', accessState, resourceIcon, bookmarked, resourceName, resourceType, accountName, region, dropDownItems, dotMenuItems, onBookmarkClick, onMoreInfoClick, onAccessClick, width, style, ...props }: ResourceCardProps): JSX.Element => {

    // Exclusive accessState styles for this component:
    const accessStateStyles: IVariant = {
        access: {
            borderColor: colors.gray[20],
            backgroundColor: colors.white,
        },
        requested: {
            borderColor: colors.yellow[50],
            backgroundColor: colors.white,
        },
        waiting: {
            borderColor: colors.yellow[50],
            backgroundColor: colors.white,
        },
        signIn: {
            borderColor: colors.blue[30],
            backgroundColor: colors.blue[5],
        },
    }

    type VariantKey = keyof typeof accessStateStyles
    const selectedAccessState = accessState as VariantKey

    const componentStyle = (): object => ({
        backgroundColor: accessStateStyles[selectedAccessState].backgroundColor,
        color: colors.gray[90],
        fontFamily: theme.font.body.regular.fontFamily,
        fontSize: theme.font.body.regular.fontSize,
        borderRadius: '4px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: accessStateStyles[selectedAccessState].borderColor,
        paddingTop: '16px',
        paddingBottom: '16px',
        paddingRight: '16px',
        paddingLeft: '24px',
        width: width || '240px' ,
        minWidth: '280px',
        maxWidth: width,
        ...style,
    })

    return (
        <View
            style={componentStyle()}
            //width={'304px'}
            padding={'16px 16px 16px 24px'}
            {...props}
        >

            {/** Row 1: AWSIcon and Bookmark button */}
            {
                accessState !== 'requested' ?
                    accessState === 'waiting' ?
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '8px', }}>
                            <div>{resourceIcon}</div>
                            <Label variant="warning" text="Awaiting for approval" />
                            </div>
                            
                            <IconButton
                                variant={ bookmarked ? 'grayBlue' : 'tertiary' }
                                icon={faBookmark}
                                onClick={onBookmarkClick}
                            />
                        </div>
                    :

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                            <div>{resourceIcon}</div>
                            <IconButton
                                variant={ bookmarked ? 'grayBlue' : 'tertiary' }
                                icon={faBookmark}
                                onClick={onBookmarkClick}
                            />
                        </div>
                :
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '8px', }}>
                        <div>{resourceIcon}</div>
                        <Label variant="warning" text="Request in progress" />
                        </div>
                        
                        <IconButton
                            variant={ bookmarked ? 'grayBlue' : 'tertiary' }
                            icon={faBookmark}
                            onClick={onBookmarkClick}
                        />
                    </div>
            }
            

            {/** Row 2: Resource name, Resource type , Account name, Region */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                    <div
                        style={{...theme.font.title.regular,
                            marginBottom: '4px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '100%',
                        }}
                    >
                        {resourceName}
                    </div>
                    <div
                        style={{...theme.font.body.regular,
                            marginBottom: '1px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '100%',
                        }}
                    >
                        {resourceType}
                    </div>
                    <div
                        style={theme.font.caption.regular}
                    >
                        {accountName} / {region}
                    </div>
                </div>
            </div>

            {/** Row 3: Bottom buttons. Conditional render on signIn access state */}
            {
                accessState !== 'signIn' ?
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="gray" onClick={onMoreInfoClick} >More Info</Button>
                        <Button variant="grayBlue" onClick={onAccessClick} >Request</Button>
                    </div>
                :
                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <div><Button variant="gray" >More Info</Button></div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <DropDownButton size="sm" variant="grayBlue" menuItems={dropDownItems}  />
                            <DropDownButton size="sm" variant="grayBlue" menuItems={dotMenuItems} hasDownArrow={false} />
                        </div>
                    </div>

            }



        </View>
    )

}