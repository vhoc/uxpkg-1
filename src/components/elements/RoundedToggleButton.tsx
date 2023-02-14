import { IconProp } from "@fortawesome/fontawesome-svg-core"
import React, { HTMLAttributes } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors } from "../../theme"

export interface RoundedToggleButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * Whether the toggle button is in active state or not.
     */
    active?: boolean
    /** Icon to show when the toggle button is in active state. */
    iconOn: IconProp
    /** Icon to show when the toggle button is not in active state. */
    iconOff: IconProp
    /** Callback to run when pressing the button, it can be used to handle its active state. */
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Icon to show when the toggle button is in active state. */
    labelOn?: string | undefined
    /** Icon to show when the toggle button is in active state. */
    labelOff?: string | undefined
}

const RoundedToggleButton = ({active = false, iconOn, iconOff, onClick, labelOn, labelOff, ...props}: RoundedToggleButtonProps): JSX.Element => {

    return (
        <button
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: '8px',
                paddingRight: '6px',
                width: '60px',
                height: '22px',
                color: colors.gray[40],
                fontFamily: 'IBM Plex Sans',
                fontSize: '12px',
                textTransform: 'capitalize',
                backgroundColor: colors.gray[10],
                borderRadius: '11px',
            }}
            onClick={onClick}
            {...props}
        >
            <span style={{fontFamily: 'IBM Plex Sans',}}>{ active ? labelOn : labelOff }</span>
            <FontAwesomeIcon icon={ active ? iconOn : iconOff }/>
        </button>
    )

}

export default RoundedToggleButton