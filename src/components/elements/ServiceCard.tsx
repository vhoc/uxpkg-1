import React, { CSSProperties, HTMLAttributes } from "react"
import { View } from "../layout/View"
import { IconButton } from "./IconButton"
import { DropDownButton } from "./DropDownButton"
import { Label } from "./Label"
import { IDropDownItem } from '../../util/sample-data'
import { Button } from "./Button"
import { faBookmark } from "@fortawesome/sharp-solid-svg-icons"
import { theme, colors, IVariant } from "../../theme"
import { faBadgeCheck } from "@fortawesome/pro-solid-svg-icons"
import { ServiceIcons } from "../graphical/ServiceIcons"

export interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {
    /** The type of the service (it determines the icon) */
    serviceType: 'SERVER' |'SERVER_PRIVATE' | 'DATABASE' | 'APPROLE' | 'APPROLE_DYNAMIC'
    /** The access state of the resource displayed in the card */
    accessState: 'access' | 'requested' | 'signIn' | 'waiting'
    /** Overrides the service type icon. */
    customIcon?: any
    /** Granted state (true or false) */
    isGranted?: boolean
    /** Policy state (true or false) */
    forPolicy?: boolean
    /** Function to run when clicking on Policy button. */
    onClickPolicy?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Function to run when clicking on Request button */
    onClickRequest? : React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Toggle the bookmarked state of the resource */
    bookmarked: boolean
    /** Callback function to run when pressing the bookmark icon */
    onClickBookmark?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Whether to show the More Info button or not. */
    showMoreInfoButton?: boolean
    /** Callback function to run when pressing the More Info button */
    onClickMoreInfo?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** The name of the resource */
    resourceName: string
    /** The type of the resource */
    resourceType: string
    /** The account name */
    accountName: string
    /** The region on which the resource is hosted */
    region: string,
    /** Menu items for the three dot dropdown button */
    dotMenuItems?: IDropDownItem[] | undefined
    /** Width override */
    width?: string | undefined
    /** Style overrides */
    style?: CSSProperties | undefined
}

export const ServiceCard = ({ serviceType, accessState, customIcon, isGranted = true, forPolicy = false, onClickPolicy, onClickRequest, bookmarked, resourceName, resourceType, accountName, region, dotMenuItems, onClickBookmark, showMoreInfoButton = false, onClickMoreInfo, width, style, }: ServiceCardProps): JSX.Element => {

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

    type ServiceType = keyof typeof ServiceIcons
    const selectedServiceType = serviceType as ServiceType

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
            padding={'16px 16px 16px 24px'}
        >

            {/** Row 1: AWSIcon and Bookmark button */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            {
                customIcon ?
                    <div>{customIcon}</div>
                :
                <img src={ServiceIcons[selectedServiceType]}/>
            }                
                <IconButton
                    variant={ bookmarked ? 'grayBlue' : 'tertiary' }
                    icon={faBookmark}
                    onClick={onClickBookmark}
                />
            </div>
            

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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                {
                    showMoreInfoButton ?                        
                    <Button
                        variant="gray"
                        size={'sm'}
                        onClick={onClickMoreInfo}
                        height={'36px'}
                    >
                        More Info
                    </Button>
                :
                    <div></div>
                }
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', }}>
                    {/** isGranted conditional > isPolicy conditional */}
                    {
                        isGranted ?
                            <Label
                                variant={'success'}
                                text={'Granted'}
                                iconButton={faBadgeCheck}
                                iconPosition={'end'}
                                style={{
                                    height: '30px',
                                }}
                            />
                        :
                            forPolicy ?
                                <Button variant="grayBlue" onClick={onClickPolicy} >Policy</Button>
                            :
                                <Button variant="grayBlue" onClick={onClickRequest} >Request</Button>

                    }
                        <DropDownButton
                            size="sm"
                            variant="grayBlue"
                            menuItems={dotMenuItems}
                            hasDownArrow={false}
                        />
                    </div>
                </div>

            
        </View>
    )

}