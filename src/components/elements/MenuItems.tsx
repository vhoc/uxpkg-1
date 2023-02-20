import React, { HTMLAttributes, useState, useEffect, useRef } from 'react'
import { DropDown } from './DropDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretRight } from '@fortawesome/sharp-solid-svg-icons'
import { variants, theme, sizes, colors } from '../../theme'
import '../../assets/styles/dropdown.css'

export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
    style?: React.CSSProperties
    /** 
     * If using an icon you need to import it and place into items.icon Like so:  
     * import { faBookmark } from "@fortawesome/sharp-solid-svg-icons";
     * Then, you would use 'faBookmark' on the icon property when using the component.
     */
    items: {
        icon?: any
        title: string | JSX.Element
        style?: object
        submenu?: any
        action?: any
    },
    depthLevel: number
    disabled?: boolean
    variant?: 'primary' | 'gray' | 'grayBlue' | 'grayRed' | 'clear'
    size?: 'sm' | 'md'
    /** Override standard sizes' height */
    height?: string,
    
    /** Override standard sizes' width */
    width?: string,
    hasDownArrow?: boolean
    isImageDropDown?: boolean
}

export const MenuItems = ({style, items, depthLevel, disabled = false, variant, size = 'sm', height, width, isImageDropDown = false, hasDownArrow, ...MenuItemProps}: MenuItemProps): JSX.Element => {

    type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey

    type SizeKey = keyof typeof sizes.button
    const selectedSize = size as SizeKey

    //console.log(items)
    const ref = useRef<HTMLLIElement>(null)
    const [dropdown, setDropdown] = useState<boolean>(false)
    const [ hover, setHover ] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)
    //const [focus, setFocus] = useState<boolean>(false)
    
    /**
     * The proper order is:
     * disabled ? (true, false) : active ? (true false) : hover ? (true false) : rest (default)
     * Otherwise, the states get messed up.
     */
    const componentStyle = (hover: boolean, active: boolean): object => ({
        backgroundColor: disabled ? variants[selectedVariant].buttonBgColorDisabled : active ? !items.submenu ? colors.blue[5] : variants[selectedVariant].buttonBgColorActive : hover ? !items.submenu ? colors.blue[5] : variants[selectedVariant].buttonBgColorHover : !items.submenu ? colors.white : variants[selectedVariant].buttonBgColor,
        color: !items.submenu ? colors.gray[90] : disabled ? variants[selectedVariant].buttonTextColorDisabled : active ? variants[selectedVariant].buttonTextColorActive : hover ? variants[selectedVariant].buttonTextColorHover : variants[selectedVariant].buttonTextColor,
        textTransform: 'capitalize',
        width: 'fit-content',
        height: height,
        minWidth: items.submenu ? '0px' : '150px',
        fontFamily: theme.font.buttonLabel.regular.fontFamily,
        fontSize: sizes.button[selectedSize].fontSize,
        paddingLeft: isImageDropDown ? '0px' : sizes.popOverMenuItem[selectedSize].paddingLeft,
        paddingRight: sizes.popOverMenuItem[selectedSize].paddingRight,
        paddingTop: isImageDropDown ? '0px' : items.submenu ? sizes.popOverMenuItem[selectedSize].paddingTop : '5px',
        paddingBottom: isImageDropDown ? '0px' : items.submenu ? sizes.popOverMenuItem[selectedSize].paddingBottom : '5px',
        borderRadius: (isImageDropDown || variant === 'clear') ? '0px' : '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        //outlineColor: focus ? variants[selectedVariant].buttonBgColor : 'transparent',
        //outlineStyle: isImageDropDown ? 'none' : 'auto',
        //outlineWidth: focus ? '2px' : '0px',
        outlineWidth: '0px',
        textAlign: 'left',
    })

    useEffect(()=> {
        const handler = (event: MouseEvent|TouchEvent ) => {
            if (dropdown && ref.current && !ref.current.contains(event.target as Node)) {
                setDropdown(false)
            }
        }

        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        }
    }, [dropdown])

    return (
        <li
            className='menu-items'
            {...MenuItemProps}
            ref={ref}
            style={{
                position: 'relative',
                fontSize: '14px',
                width: 'fit-content',
            }}
        >
        {
            items.submenu ? (
                <>
                    <button
                        type='button'
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? 'true' : 'false'}
                        style={componentStyle(hover, active)}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        onMouseDown={() => setActive(true)}
                        onMouseUp={() => setActive(false)}
                        //onFocus={() => setFocus(true)}
                        //onBlur={() => setFocus(false)}
                        onClick={() => {
                            if (!disabled) {
                                setDropdown((prev) => !prev)
                            } else {
                                return
                            }
                        }}
                    >
                       <div
                        style={{
                            display: 'flex',
                            justifyContent: hasDownArrow ? 'space-between' : 'center',
                        }}
                       >
                            <div>
                                <div style={{
                                    display: 'flex',
                                    gap: hasDownArrow ? '8px' : '0',
                                    padding: hasDownArrow ? '0px 0px 0px 0px' : '0px 4px 0px 4px'
                                }}>
                                {
                                    items.icon ?
                                        <div>{ items.icon ? <FontAwesomeIcon icon={items.icon}/> : '' }</div>
                                    :
                                        null
                                }                                    
                                        <div>{ items.title }{" "}</div>
                                </div>
                            </div>

                            
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                            {
                                depthLevel > 0 ?
                                    <span>
                                        <FontAwesomeIcon icon={faCaretRight} style={{ marginLeft: '10px' }}/>
                                    </span>
                                :
                                    hasDownArrow ?
                                        <span>
                                            <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '10px'}}/>
                                        </span>
                                    :
                                        null
                            }
                            </div>

                        </div>
                    </button>
                    <DropDown
                        submenus={items.submenu}
                        dropdown={dropdown}
                        depthLevel={depthLevel}
                        variant={variant}
                        disabled={disabled}
                    />
                </>
            ) : (
                <button
                    className="singleMenuItem"
                    style={componentStyle(hover, active)}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onMouseDown={() => setActive(true)}
                    onMouseUp={() => setActive(false)}
                    onClick={items.action}
                >
                    <span style={ { display: 'flex', gap: '8px' } }>
                        <span>{ items.icon ? <FontAwesomeIcon icon={items.icon}/> : '' }</span>
                        <span>{ items.title }</span>
                    </span>
                    <span></span>                    
                </button>
            )
        }
        </li>
  )
}