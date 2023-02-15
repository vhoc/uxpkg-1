import "@fontsource/ibm-plex-sans"
import { createTheme } from "@mui/material/styles";
import { enUS } from '@mui/material/locale';

export const mtheme = createTheme(
    {
        typography: {
            fontFamily: [
                'IBM Plex Sans',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
        },
    },
  enUS,
);

export type TVariant = {
    buttonBgColor?: string
    buttonBgColorHover?: string
    buttonBgColorActive?: string
    buttonBgColorDisabled?: string
    buttonOpacity?: string
    buttonTextColor?: string
    buttonTextColorHover?: string
    buttonTextColorActive?: string
    buttonTextColorDisabled?: string
    buttonBorderColor?: string
    alertIconBgColor?: string
    alertIconFgColor?: string
    labelBgColor?: string
    labelTextColor?: string
    borderColor?: string
    backgroundColor?: string
    popoverMenuItemBgColor?: string
    popoverMenuItemBgColorHover?: string
    popoverMenuItemTextColor?: string
    sideBarBgColor?: string
    sideBarMenuItemBgColor?: string
    sideBarMenuItemBgColorHover?: string
    sideBarMenuItemTextColor?: string
    sideBarMenuItemIconColor?: string
    sideBarMenuItemIconColorHover?: string
}

export interface IVariant {
    [key: string]: TVariant
}


export const colors = {
    gray: {
        '5': '#f9fbfc',
        '10': '#eef4f7',
        '20': '#d8dde4',
        '30': '#c8cdd4',
        '40': '#a6abb6',
        '50': '#8d94a1',
        '70': '#545b71',
        '90': '#222945',
    },
    blue: {
        '5': '#f6fbff',
        '10': '#f1f4fb',
        '20': '#e2e9f7',
        '30': '#d0d9ea',
        '40': '#adbede',
        '50': '#658bd3',
        '60': '#3267d6',
    },
    white: '#ffffff',
    yellow: {
        '50': '#d8a032',
    },
    red: {
        '50': '#e02a47',
    },
    green: {
        '50': '#5e9a5a',
    },
    darkBlue: '#2e3955',
    button: {
        secondary: {
            blue: {
                hover: 'rgba(50,103,214,0.06)',
                rest: 'rgba(50,103,214,0.04)',
            },
            red: {
                rest: 'rgba(224,42,71,0.04)',
            },
            gray: {
                rest: 'rgba(35,37,41,0.04)',
            }
        },
        tertiary: {
            blue: {
                rest: 'rgba(50,103,214,0.03)',
            },
        },
    }
}

export const theme = {

    font: {
        title: {
            regular: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '16px',
                fontWeight: 'normal',
                color: colors.gray[90],
            },
        },
        h2: {
            medium: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '24px',
                fontWeight: '500',
                color: colors.gray[90],
            },
        },
        h3: {
            regular: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '20px',
                fontWeight: 'normal',
                color: colors.gray[90],
            },
        },
        h4: {
            medium: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '18px',
                fontWeight: '500',
                color: colors.gray[70],
            },
        },
        buttonLabel: {
            medium: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '16px',
                fontWeight: 'normal',
                color: colors.white,
            },
            regular: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '14px',
                fontWeight: 'normal',
                color: '#3d4047',
            }
        },
        body: {
            semiBold: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '14px',
                fontWeight: '600',
                color: colors.gray[70],
                lineHeight: '1.71',
            },
            regular: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '14px',
                fontWeight: 'normal',
                color: colors.gray[70],
            },
        },
        bodySmall: {
            regular: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '13px',
                fontWeight: 'normal',
                color: colors.blue[50],
            }
        },
        caption: {
            regular: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '12px',
                fontWeight: 'normal',
                color: colors.gray[50],
            },
        },
        inputText: {
            hint: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '14px',
                fontWeight: 'normal',
                color: colors.gray[30],
            },
            typed: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '14px',
                fontWeight: 'normal',
                color: colors.gray[90],
            },
        },
    },
}
export const sizes = {
    button: {
        sm: {
            fontSize: '14px',
            fontWeight: '400',
            height: '34px',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingTop: '8px',
            paddingBottom: '8px',
        },
        md: {
            fontSize: '16px',
            fontWeight: '400',
            height: '40px',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingTop: '10px',
            paddingBottom: '10px',
        }
    },
    iconButton: {
        sm: {
            fontSize: '14px',
            fontWeight: '400',
            height: '34px',
            width: '34px',
            paddingLeft: '8px',
            paddingRight: '8px',
            paddingTop: '8px',
            paddingBottom: '8px',
        }
    },
    popOverMenuItem: {
        sm: {            
            paddingLeft: '11px',
            paddingRight: '11px',
            paddingTop: '8px',
            paddingBottom: '8px',
        },
        md: {            
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingTop: '10px',
            paddingBottom: '10px',
        },

    }
}

export const variants: IVariant = {
    primary: {
        buttonBgColor: colors.blue[60],
        buttonBgColorHover: 'rgba(50, 103, 214, 0.9)',
        buttonBgColorActive: 'rgba(50, 103, 214, 1)',
        buttonBgColorDisabled: 'rgba(50, 103, 214, 0.03)',
        buttonTextColor: colors.white,
        buttonTextColorHover: colors.white,
        buttonTextColorActive: colors.white,
        buttonTextColorDisabled: colors.blue[30],
        popoverMenuItemBgColor: colors.white,
        popoverMenuItemBgColorHover: colors.blue[5],
        popoverMenuItemTextColor: colors.gray[90],
        sideBarBgColor: colors.white,
        sideBarMenuItemBgColor: colors.white,
        sideBarMenuItemIconColor: colors.gray[90],
        sideBarMenuItemIconColorHover: colors.blue[60],
        sideBarMenuItemBgColorHover: colors.blue[10],
        sideBarMenuItemTextColor: colors.gray[90],
    },
    secondary: {
        buttonBgColor: 'rgba(50, 103, 214, 0.04)',
        buttonBgColorHover: 'rgba(50, 103, 214, 0.06)',
        buttonBgColorActive: 'rgba(50, 103, 214, 0.06)',
        buttonBgColorDisabled: 'rgba(50, 103, 214, 0.03)',
        buttonTextColor: colors.blue[60],
        buttonTextColorHover: colors.blue[60],
        buttonTextColorActive: colors.blue[60],
        buttonTextColorDisabled: colors.white,
    },
    tertiary: {
        buttonBgColor: 'rgba(50, 103, 214, 0.03)',
        buttonBgColorHover: 'rgba(50, 103, 214, 0.05)',
        buttonBgColorActive: 'rgba(50, 103, 214, 0.05)',
        buttonBgColorDisabled: 'rgba(50, 103, 214, 0.03)',
        buttonTextColor: colors.gray[30],
        buttonTextColorHover: colors.gray[30],
        buttonTextColorActive: colors.gray[30],
        buttonTextColorDisabled: colors.gray[30],
    },
    clear: {
        buttonBgColor: colors.white,
        buttonBgColorHover: colors.white,
        buttonBgColorActive: colors.white,
        buttonBgColorDisabled: colors.white,
        buttonTextColor: colors.gray[70],
        buttonTextColorHover: colors.gray[70],
        buttonTextColorActive: colors.gray[70],
        buttonTextColorDisabled: colors.gray[70],
    },
    warning: {
        buttonBgColor: '#f59f03',
        buttonBgColorHover: '#d97706',
        buttonTextColor: '#fff',
        labelBgColor: 'rgba(216, 160, 50, 0.1)',
        labelTextColor: colors.yellow[50],
        borderColor: colors.yellow[50],
    },
    danger: {
        buttonBgColor: '#dd2121',
        buttonBgColorHover: '#b91c1c',
        buttonTextColor: '#fff',
        labelBgColor: 'rgba(224, 42, 71, 0.1)',
        labelTextColor: colors.red[50],
        borderColor: colors.red[50],
    },
    success: {
        alertIconBgColor: '#AFE1AF',
        alertIconFgColor: '#097969',
        buttonBgColor: '#AFE1AF',
        buttonBgColorHover: '#097969',
        buttonTextColor: '#000',
        buttonBorderColor: '#AFE1AF',
        labelBgColor: 'rgba(94, 154, 90, 0.1)',
        labelTextColor: colors.green[50],
        borderColor: colors.green[50],
    },
    gray: {
        buttonBgColor: 'rgba(35, 37, 41, 0.04)',
        buttonBgColorHover: 'rgba(35, 37, 41, 0.06)',
        buttonBgColorActive: 'rgba(35, 37, 41, 0.06)',
        buttonBgColorDisabled: 'rgba(35, 37, 41, 0.04)',
        buttonTextColor: colors.gray[70],
        buttonTextColorHover: colors.gray[70],
        buttonTextColorActive: colors.gray[70],
        buttonTextColorDisabled: colors.gray[70],
        labelBgColor: 'rgba(141, 148, 161, 0.1)',
        labelTextColor: colors.gray[50],
    },
    grayBlue: {
        buttonBgColor: 'rgba(50, 103, 214, 0.04)',
        buttonBgColorHover: 'rgba(50, 103, 214, 0.06)',
        buttonBgColorActive: 'rgba(50, 103, 214, 0.06)',
        buttonBgColorDisabled: 'rgba(50, 103, 214, 0.04)',
        buttonTextColor: colors.blue[60],
        buttonTextColorHover: colors.blue[60],
        buttonTextColorActive: colors.blue[60],
        buttonTextColorDisabled: colors.blue[60],
        labelBgColor: colors.blue[10],
        labelTextColor: colors.blue[50],
    },
    grayRed: {
        buttonBgColor: 'rgba(35, 37, 41, 0.02)',
        buttonBgColorHover: 'rgba(35, 37, 41, 0.06)',
        buttonBgColorActive: 'rgba(35, 37, 41, 0.06)',
        buttonBgColorDisabled: 'rgba(35, 37, 41, 0.02)',
        buttonTextColor: colors.red[50],
        buttonTextColorHover: colors.red[50],
        buttonTextColorActive: colors.red[50],
        buttonTextColorDisabled: colors.red[50],
    },
}