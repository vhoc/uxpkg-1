import React, { CSSProperties, HTMLAttributes, useState, useEffect } from "react"
import { View } from "../layout/View"
import { IconButton } from "./IconButton"
import { DropDownButton } from "./DropDownButton"
import { Label } from "./Label"
import { IDropDownItem } from '../../util/sample-data'
import { Button } from "./Button"
import { faBookmark } from "@fortawesome/sharp-solid-svg-icons"
import { theme, colors, IVariant } from "../../theme"

export interface ResourceCardProps extends HTMLAttributes<HTMLDivElement> {
    /** The access state of the resource displayed in the card */
    accessState: 'access' | 'requested' | 'signIn' | 'waiting'
    /** The resource icon to be displayed at the top left corner of the card */
    resourceIcon?: JSX.Element | null
    /** Toggle the bookmarked state of the resource */
    bookmarked: boolean
    /** Whether to display 'Policy' or 'Request' on the access button. */
    forPolicy?: boolean
    /** Callback function to run when pressing the bookmark icon */
    onClickBookmark?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Whether to show the More Info button or not. */
    showMoreInfoButton?: boolean
    /** Callback function to run when pressing the More Info button */
    onClickMoreInfo?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Callback function to run when pressing the Policy button. */
    onClickPolicy?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Callback function to run when pressing the Request button. */
    onClickRequest?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Callback function to run when pressing the SignIn button. */
    onClickSingleSignIn?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** The name of the resource */
    resourceName: string
    /** The type of the resource */
    resourceType: string
    /** The account name */
    accountName: string
    /** The region on which the resource is hosted */
    region: string,
    /** Menu items for the dropdown button at the bottom of the card */
    dropDownItems?: IDropDownItem[] | undefined
    /** Menu items for the three dot dropdown button */
    dotMenuItems?: IDropDownItem[] | undefined
    /** Width override */
    width?: string | undefined
    /** Style overrides */
    style?: CSSProperties | undefined
}

export const ResourceCard = ({ accessState, resourceIcon, bookmarked, forPolicy = false, resourceName, resourceType, accountName, region, dropDownItems, dotMenuItems, onClickBookmark, showMoreInfoButton = true, onClickMoreInfo, onClickPolicy, onClickRequest, onClickSingleSignIn = undefined, width, style, }: ResourceCardProps): JSX.Element => {

    const [ButtonSet, setButtonSet] = useState<React.ReactNode | null>(null)
    
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

    useEffect(() => {
        switch(accessState) {
            case 'access':
                setButtonSet(() => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {
                            showMoreInfoButton ?
                                <Button variant="gray" onClick={onClickMoreInfo} >More Info</Button>
                            :
                                <div></div>
                        }
                        {
                            forPolicy ?
                                <Button variant="grayBlue" onClick={onClickPolicy} >Policy</Button>
                            :
                                <Button variant="grayBlue" onClick={onClickRequest} >Request</Button>
                        }
                        </div>
                    )
                })
                break;
            /** */
            case 'requested':
                setButtonSet(() => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {
                            showMoreInfoButton ?
                                <Button variant="gray" onClick={onClickMoreInfo} >More Info</Button>
                            :
                                <div></div>
                        }
                        {
                            forPolicy ?
                                <Button variant="grayBlue" onClick={onClickPolicy} >Policy</Button>
                            :
                                <Button variant="grayBlue" onClick={onClickRequest} >Request</Button>
                        }
                        </div>
                    )
                })
                break;
            /** */
            case 'signIn':
                setButtonSet(() => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                            {
                                showMoreInfoButton ?
                                    <div><Button variant="gray" >More Info</Button></div>
                                :
                                    null
                            }
                            <div style={{ display: 'flex', gap: '8px' }}>
                            {
                                ( dropDownItems && dropDownItems?.length <= 1 && !dropDownItems[0].submenu) || onClickSingleSignIn ?
                                    
                                    accessState === 'signIn' ?
                                        <Button variant="grayBlue" onClick={onClickSingleSignIn} >Sign In</Button>
                                    :
                                        null
                                :
                                    <DropDownButton size="sm" variant="grayBlue" menuItems={dropDownItems}  />
                            }
                                <DropDownButton size="sm" variant="grayBlue" menuItems={dotMenuItems} hasDownArrow={false} />
                            </div>
                        </div>
                    )
                })
                break;
            /** */
            case 'waiting':
                setButtonSet(() => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {
                            showMoreInfoButton ?
                                <Button variant="gray" onClick={onClickMoreInfo} >More Info</Button>
                            :
                                <div></div>
                        }
                        {
                            forPolicy ?
                                <Button variant="grayBlue" onClick={onClickPolicy} >Policy</Button>
                            :
                                <Button variant="grayBlue" onClick={onClickRequest} >Request</Button>
                        }
                        </div>
                    )
                })
                break;
            default:
                setButtonSet(null)
                break;
        }
    }, [accessState, showMoreInfoButton, forPolicy, onClickMoreInfo, onClickPolicy, onClickRequest, dotMenuItems, onClickSingleSignIn, dropDownItems])

    return (
        <View
            style={componentStyle()}
            padding={'16px 16px 16px 24px'}
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
                                onClick={onClickBookmark}
                            />
                        </div>
                    :

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                            <div>{resourceIcon}</div>
                            <IconButton
                                variant={ bookmarked ? 'grayBlue' : 'tertiary' }
                                icon={faBookmark}
                                onClick={onClickBookmark}
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
                            onClick={onClickBookmark}
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
                        {accountName} { region ? `/ ${region}` : null }
                    </div>
                </div>
            </div>

            {/** Row 3: Bottom buttons. Conditional render on signIn access state */}
            {(ButtonSet)}
        </View>
    )

}