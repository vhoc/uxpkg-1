import React from "react"
import SnackbarContent, { SnackbarContentProps } from '@mui/material/SnackbarContent';
import { Button } from "./Button";
import { colors } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Menu, MenuItem, SxProps, Theme } from "@mui/material";
import { SelectDropDownItemProps } from "./SelectDropDown";
import IconButton from "@mui/material/IconButton";

export interface AccessRequestModalProps {
    /** The state of the request */
    variant: 'queued' | 'submitted'
    /** The number of requests on queue if it applies. */
    requestCount?: number | undefined
    /** The icon on the left of the message. */
    leftIcon: IconProp,
    /** Text message of the Modal */
    textMessage: string,
    /** Items of the DropDown menu (button available on the 'queued' variant) */
    menuItems?: SelectDropDownItemProps[] | undefined,
    /** Function to be triggered by the "Continue Button" */
    continueButtonOnClick?: React.MouseEventHandler<HTMLButtonElement>
    /** Styling object */
    sx?: SxProps<Theme> | undefined

}

const AccessRequestModal = ({ variant, requestCount, leftIcon, textMessage, menuItems, continueButtonOnClick, sx, }: AccessRequestModalProps): JSX.Element => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };

    const action = (
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Button variant={ variant === 'queued' ? 'primary' : 'success'} size={'sm'} onClick={continueButtonOnClick}>
                Continue
            </Button>
            {
                variant === 'queued' ?
                    <div>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            sx={{
                                height: '20px',
                                width: '20px',
                                fontFamily: 'IBM Plex Sans',
                                fontSize: '16px',
                                color: colors.white,
                                marginRight: '6px',
                            }}
                        >
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                            'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            sx={{
                                fontFamily: 'IBM Plex Sans',
                            }}
                        >
                        {
                            menuItems && menuItems.length >= 1 ?
                                menuItems.map((item) => {
                                    return (
                                        <MenuItem
                                            key={item.value}
                                            selected={item.selected || false}
                                            onClick={item.onClick}
                                            sx={{
                                                fontFamily: 'IBM Plex Sans',
                                                fontSize: '14px',
                                            }}
                                        >
                                            {item.label}
                                        </MenuItem>
                                    )
                                })
                            :
                                null
                        }
                        </Menu>
                    </div>
                :
                    null
            }
            
        </div>
    )

    const message = (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                fontFamily: 'IBM Plex Sans',
                fontWeight: '600',
                fontSize: '14px',
            }}
        >
            <FontAwesomeIcon icon={leftIcon}/>
            <span>{`${ requestCount ? requestCount.toString() + ' ' : '' }${ textMessage }`}</span>
        </div>
    )

    return (
        <SnackbarContent
            sx={{
                height: '50px',
                backgroundColor: variant === 'queued' ? '#274A7F' : colors.green[50],
                ...sx
            }}
            message={ message }
            action={ action }
        />
    )
}

export default AccessRequestModal