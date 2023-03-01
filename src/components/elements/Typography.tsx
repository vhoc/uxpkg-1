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
    /** Style override if needed. */
    style?: CSSProperties | undefined,
}

export const Typography = ({ children, variant, style, ...props }: TypographyProps): JSX.Element => {

    const stylesTable = {
        'body-regular': theme.font.body.regular,
        'body-semiBold': theme.font.body.semiBold,
        'bodySmall-regular': theme.font.bodySmall.regular,
        'breadcrumbLink': theme.font.breadcrumb,
        'breadcrumbLink-hover': theme.font.breadcrumb.hover,
        'breadcrumbLink-pressed': theme.font.breadcrumb.pressed,
        'buttonLabel-regular': theme.font.buttonLabel.regular,
        'buttonLabel-medium': theme.font.buttonLabel.medium,
        'caption-regular': theme.font.caption.regular,
        'h2': theme.font.h2.medium,
        'h3': theme.font.h3.regular,
        'h4-regular': theme.font.h4.regular,
        'h4-medium': theme.font.h4.medium,
        'inputText-hint': theme.font.inputText.hint,
        'inputText-typed': theme.font.inputText.typed,
        'title-regular': theme.font.title.regular,
    }

    type VariantKey = keyof typeof stylesTable
    const selectedVariant = variant as VariantKey

    return (
        <div
            style={{
                ...stylesTable[selectedVariant],
                ...style,
            }}
            {...props}
        >
            {children}
        </div>
    )

}