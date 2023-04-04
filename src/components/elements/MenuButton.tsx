import React, { useState, useRef, useEffect } from "react";
import Popper from "@mui/material/Popper";
import { IconButton } from "./IconButton";
import { faEllipsisV } from "@fortawesome/pro-regular-svg-icons";
import { MenuButtonItem } from "./MenuButtonItem";
import { Paper } from "@mui/material";
import '../../assets/styles/dropdown.css'

export interface IMenuItem {
    /** asdasdasd */
    icon?: any
    title: string
    style?: object
    action?: React.MouseEventHandler<HTMLButtonElement> | undefined
    variant?: 'primary' | 'gray' | 'grayBlue' | 'grayRed' | 'clear'
    size?: 'sm' | 'md'
    disabled?: boolean
}

export interface MenuButtonProps {
    /**
     * Array of IMenuItem:  
     * -- icon (any) _Optional_  
     * -- title (string)  
     * -- style (object) _Optional_  
     * -- action (React.MouseEventHandler<HTMLButtonElement> | undefined) _Optional_  
     * -- variant ('primary' | 'gray' | 'grayBlue' | 'grayRed' | 'clear') _Optional_  
     * -- size ('sm' | 'md') _Optional_  
     * -- disabled (boolean) _Optional_  
     */
    menuItems: IMenuItem[]
    /** The size of the button. */
    size?: 'sm' | 'md'
    /** Disabled state of the button. */
    disabled?: boolean
}



export const MenuButton = ({ menuItems }: MenuButtonProps): JSX.Element => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const useClickOutsideEvent = (ref: any) => {
        useEffect(() => {
            const handleClickOutside = (event: any) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setAnchorEl(null)
                }
            }
            document.addEventListener("mousedown", handleClickOutside)
            return () => {
                document.removeEventListener("mousedown", handleClickOutside)
            }
        }, [ref])
    }

    const wrapperRef = useRef(null)
    useClickOutsideEvent(wrapperRef)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div >
            <IconButton
                aria-describedby={id}
                icon={faEllipsisV}
                onClick={handleClick}
                size="sm"
                variant="gray"
                style={{
                    width: '34px',
                    height: '34px',
                }}
            />
            <Popper id={id} open={open} anchorEl={anchorEl} ref={wrapperRef}>
                <Paper
                    sx={{
                        width: '150px',
                        maxWidth: '150px',
                        maxHeight: '200px',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                    }}
                >
                    <ul>
                    {
                        menuItems && menuItems.length >= 1 ?
                            menuItems.map((item, index) => {
                                return (
                                    <MenuButtonItem
                                        key={index}
                                        action={item.action}
                                        icon={item.icon}
                                        title={item.title}
                                        disabled={item.disabled}
                                        size={item.size}
                                    />
                                )
                            })
                        :
                            null
                    }
                    </ul>
                </Paper>                
            </Popper>

        </div>
    )

}