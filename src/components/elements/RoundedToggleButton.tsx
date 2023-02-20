import { IconProp } from "@fortawesome/fontawesome-svg-core"
import React, { HTMLAttributes } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors } from "../../theme"

export interface RoundedToggleButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** Icon to show on the side of the label */
    icon: IconProp    
    /** Callback to run when pressing the button, it can be used to handle its active state. */
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Text label in the button. */
    label?: string | undefined
}

export const RoundedToggleButton = ({icon, onClick, label, ...props}: RoundedToggleButtonProps): JSX.Element => {

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
                outlineWidth: '0px',
                border: 'none',
                borderWidth: '0px',
            }}
            onClick={onClick}
            {...props}
        >
            <span style={{fontFamily: 'IBM Plex Sans',}}>{ label }</span>
            <FontAwesomeIcon icon={ icon }/>
        </button>
    )

}