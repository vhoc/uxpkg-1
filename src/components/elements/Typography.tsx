import React, { CSSProperties, HTMLAttributes } from "react";
import { ReactNode } from "react";
import { theme } from "../../theme";

export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
    /** ReactNode children or a text string */
    children: ReactNode | string
    /** The font styles variant */
    variant:
        'body-regular' |
        'body-semiBold' |
        'bodySmall-regular' |
        'breadcrumbLink' |
        'breadcrumbLink-hover'|
        'breadcrumbLink-pressed' |
        'buttonLabel-regular' |
        'buttonLabel-medium' |
        'caption-regular' |
        'h2' |
        'h3' |
        'h4-regular' |
        'h4-medium' |
        'inputText-hint' |
        'inputText-typed' |
        'title-regular'
    /** Class name(s) */
    className?: string | undefined
    /** Style override if needed. */
    style?: CSSProperties | undefined,
}

export const Typography = ({ children, variant, className, style }: TypographyProps): JSX.Element => {

    const stylesTable = {
        'body-regular': {...theme.font.body.regular, ...style},
        'body-semiBold': {...theme.font.body.semiBold, ...style},
        'bodySmall-regular': {...theme.font.bodySmall.regular, ...style},
        'breadcrumbLink': {...theme.font.breadcrumb, ...style},
        'breadcrumbLink-hover': {...theme.font.breadcrumb.hover, ...style},
        'breadcrumbLink-pressed': {...theme.font.breadcrumb.pressed, ...style},
        'buttonLabel-regular': {...theme.font.buttonLabel.regular, ...style},
        'buttonLabel-medium': {...theme.font.buttonLabel.medium, ...style},
        'caption-regular': {...theme.font.caption.regular, ...style},
        'h2': {...theme.font.h2.medium, ...style},
        'h3': {...theme.font.h3.regular, ...style},
        'h4-regular': {...theme.font.h4.regular, ...style},
        'h4-medium': {...theme.font.h4.medium, ...style},
        'inputText-hint': {...theme.font.inputText.hint, ...style},
        'inputText-typed': {...theme.font.inputText.typed, ...style},
        'title-regular': {...theme.font.title.regular, ...style},
    }

    type VariantKey = keyof typeof stylesTable
    const selectedVariant = variant as VariantKey

    return (
        <div
            className={className}
            style={
                {...stylesTable[selectedVariant]}
            }
        >
            {children}
        </div>
    )

}