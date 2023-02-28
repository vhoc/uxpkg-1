import "@fontsource/ibm-plex-sans";
export declare const mtheme: import("@mui/material/styles").Theme;
export type TVariant = {
    buttonBgColor?: string;
    buttonBgColorHover?: string;
    buttonBgColorActive?: string;
    buttonBgColorDisabled?: string;
    buttonOpacity?: string;
    buttonTextColor?: string;
    buttonTextColorHover?: string;
    buttonTextColorActive?: string;
    buttonTextColorDisabled?: string;
    buttonBorderColor?: string;
    alertIconBgColor?: string;
    alertIconFgColor?: string;
    labelBgColor?: string;
    labelTextColor?: string;
    borderColor?: string;
    backgroundColor?: string;
    popoverMenuItemBgColor?: string;
    popoverMenuItemBgColorHover?: string;
    popoverMenuItemTextColor?: string;
    sideBarBgColor?: string;
    sideBarMenuItemBgColor?: string;
    sideBarMenuItemBgColorHover?: string;
    sideBarMenuItemTextColor?: string;
    sideBarMenuItemIconColor?: string;
    sideBarMenuItemIconColorHover?: string;
};
export interface IVariant {
    [key: string]: TVariant;
}
export declare const colors: {
    gray: {
        '5': string;
        '10': string;
        '20': string;
        '30': string;
        '40': string;
        '50': string;
        '70': string;
        '90': string;
    };
    blue: {
        '5': string;
        '10': string;
        '20': string;
        '30': string;
        '40': string;
        '50': string;
        '60': string;
    };
    white: string;
    yellow: {
        '50': string;
    };
    red: {
        '50': string;
    };
    green: {
        '50': string;
    };
    darkBlue: string;
    button: {
        secondary: {
            blue: {
                hover: string;
                rest: string;
            };
            red: {
                rest: string;
            };
            gray: {
                rest: string;
            };
        };
        tertiary: {
            blue: {
                rest: string;
            };
        };
    };
};
export declare const theme: {
    font: {
        title: {
            regular: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                color: string;
            };
        };
        h2: {
            medium: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                color: string;
            };
        };
        h3: {
            regular: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                color: string;
            };
        };
        h4: {
            regular: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                color: string;
            };
            medium: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                color: string;
            };
        };
        buttonLabel: {
            medium: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                color: string;
            };
            regular: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                color: string;
            };
        };
        body: {
            semiBold: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                color: string;
                lineHeight: string;
            };
            regular: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                color: string;
            };
        };
        bodySmall: {
            regular: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                color: string;
            };
        };
        caption: {
            regular: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                color: string;
            };
        };
        inputText: {
            hint: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                color: string;
            };
            typed: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                color: string;
            };
        };
        breadcrumb: {
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            color: string;
            hover: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                color: string;
            };
            pressed: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                color: string;
            };
        };
    };
};
export declare const sizes: {
    button: {
        sm: {
            fontSize: string;
            fontWeight: string;
            height: string;
            paddingLeft: string;
            paddingRight: string;
            paddingTop: string;
            paddingBottom: string;
        };
        md: {
            fontSize: string;
            fontWeight: string;
            height: string;
            paddingLeft: string;
            paddingRight: string;
            paddingTop: string;
            paddingBottom: string;
        };
    };
    iconButton: {
        sm: {
            fontSize: string;
            fontWeight: string;
            height: string;
            width: string;
            paddingLeft: string;
            paddingRight: string;
            paddingTop: string;
            paddingBottom: string;
        };
    };
    popOverMenuItem: {
        sm: {
            paddingLeft: string;
            paddingRight: string;
            paddingTop: string;
            paddingBottom: string;
        };
        md: {
            paddingLeft: string;
            paddingRight: string;
            paddingTop: string;
            paddingBottom: string;
        };
    };
};
export declare const variants: IVariant;
