import { ReactNode } from "react"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

export interface ITab {
    label: string
    tabContent: ReactNode
}

export interface ISegmentedControlItem {
    value: string
    ariaLabel: string
    icon: IconProp | ReactNode
    selected?: boolean
    onClick?: (event: React.MouseEvent<HTMLElement>, value: any) => void
    onChange?: (event: React.MouseEvent<HTMLElement>, value: any) => void
    disabled?: boolean
}

export interface ICounterItem {
    element?: any
    count: number
}