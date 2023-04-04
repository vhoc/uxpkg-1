import React from "react"
import SnackbarContent from '@mui/material/SnackbarContent';
import { Button } from "./Button";
import { colors } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Menu, MenuItem, SxProps, Theme } from "@mui/material";
import { SelectDropDownItemProps } from "./SelectDropDown";
import IconButton from "@mui/material/IconButton";
import { variants } from "../../theme";

export interface SnackBarProps {
    /** Color set */
    variant: 'primary' | 'success' | 'warning' | 'danger'
    /** Icon override to replace the default one defined by the variant. */
    leftIcon: IconProp,
    /** Text message of the Modal */
    textMessage: string,
    /** Whether to show the dropdown button */
    showDropDownButton?: boolean,
    /** Show extra button at the left of the Continue button */
    showExtraButton?: boolean,
    /** Extra button label. Requires the showExtraButton prop to be set to TRUE. */
    extraButtonLabel?: string | undefined
    /** Function to run when the extra button is clicked. Requires the showExtraButton prop to be set to TRUE. */
    onClickExtraButton?: React.MouseEventHandler<HTMLButtonElement> | undefined
    /** Items of the DropDown menu. Requires showDropDownButton prop to be set to TRUE. */
    menuItems?: SelectDropDownItemProps[] | undefined,
    /** Function to be triggered by the "Continue Button" */
    onClickContinueButton?: React.MouseEventHandler<HTMLButtonElement>
    /** Styling object */
    sx?: SxProps<Theme> | undefined

}

export const SnackBar = ({ variant, leftIcon, textMessage, showExtraButton = false, onClickExtraButton, extraButtonLabel, menuItems, showDropDownButton = false, onClickContinueButton, sx, }: SnackBarProps): JSX.Element => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };

    type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey

    const action = (
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {
            showExtraButton ?
                <Button variant={variant} size={'sm'} onClick={onClickExtraButton}>{extraButtonLabel}</Button>
            :
                null
        }
            <Button variant={ variant } size={'sm'} onClick={onClickContinueButton}>
                Continue
            </Button>
            {
                showDropDownButton ?
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
            <FontAwesomeIcon icon={leftIcon ? leftIcon: variants[selectedVariant].snackBarLeftIcon as IconProp} size={'lg'}/>
            <span>{textMessage}</span>
        </div>
    )

    return (
        <SnackbarContent
            sx={{
                height: '50px',
                backgroundColor: variants[selectedVariant].snackBarBgColor,
                ...sx
            }}
            message={ message }
            action={ action }
        />
    )
}