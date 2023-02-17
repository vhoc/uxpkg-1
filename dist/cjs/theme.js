"use strict";
exports.__esModule = true;
exports.variants = exports.sizes = exports.theme = exports.colors = exports.mtheme = void 0;
require("@fontsource/ibm-plex-sans");
var styles_1 = require("@mui/material/styles");
var locale_1 = require("@mui/material/locale");
exports.mtheme = (0, styles_1.createTheme)({
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
        ].join(',')
    }
}, locale_1.enUS);
exports.colors = {
    gray: {
        '5': '#f9fbfc',
        '10': '#eef4f7',
        '20': '#d8dde4',
        '30': '#c8cdd4',
        '40': '#a6abb6',
        '50': '#8d94a1',
        '70': '#545b71',
        '90': '#222945'
    },
    blue: {
        '5': '#f6fbff',
        '10': '#f1f4fb',
        '20': '#e2e9f7',
        '30': '#d0d9ea',
        '40': '#adbede',
        '50': '#658bd3',
        '60': '#3267d6'
    },
    white: '#ffffff',
    yellow: {
        '50': '#d8a032'
    },
    red: {
        '50': '#e02a47'
    },
    green: {
        '50': '#5e9b5a'
    },
    darkBlue: '#2e3955',
    button: {
        secondary: {
            blue: {
                hover: 'rgba(50,103,214,0.06)',
                rest: 'rgba(50,103,214,0.04)'
            },
            red: {
                rest: 'rgba(224,42,71,0.04)'
            },
            gray: {
                rest: 'rgba(35,37,41,0.04)'
            }
        },
        tertiary: {
            blue: {
                rest: 'rgba(50,103,214,0.03)'
            }
        }
    }
};
exports.theme = {
    font: {
        title: {
            regular: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '16px',
                fontWeight: 'normal',
                color: exports.colors.gray[90]
            }
        },
        h2: {
            medium: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '24px',
                fontWeight: '500',
                color: exports.colors.gray[90]
            }
        },
        h3: {
            regular: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '20px',
                fontWeight: 'normal',
                color: exports.colors.gray[90]
            }
        },
        h4: {
            medium: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '18px',
                fontWeight: '500',
                color: exports.colors.gray[70]
            }
        },
        buttonLabel: {
            medium: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '16px',
                fontWeight: 'normal',
                color: exports.colors.white
            },
            regular: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '14px',
                fontWeight: 'normal',
                color: '#3d4047'
            }
        },
        body: {
            semiBold: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '14px',
                fontWeight: '600',
                color: exports.colors.gray[70],
                lineHeight: '1.71'
            },
            regular: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '14px',
                fontWeight: 'normal',
                color: exports.colors.gray[70]
            }
        },
        bodySmall: {
            regular: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '13px',
                fontWeight: 'normal',
                color: exports.colors.blue[50]
            }
        },
        caption: {
            regular: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '12px',
                fontWeight: 'normal',
                color: exports.colors.gray[50]
            }
        },
        inputText: {
            hint: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '14px',
                fontWeight: 'normal',
                color: exports.colors.gray[30]
            },
            typed: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '14px',
                fontWeight: 'normal',
                color: exports.colors.gray[90]
            }
        },
        breadcrumb: {
            fontFamily: 'IBM Plex Sans',
            fontSize: '13px',
            fontWeight: '400',
            color: exports.colors.gray[70],
            hover: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '13px',
                fontWeight: '400',
                color: exports.colors.blue[60]
            },
            pressed: {
                fontFamily: 'IBM Plex Sans',
                fontSize: '13px',
                fontWeight: '400',
                color: exports.colors.blue[50]
            }
        }
    }
};
exports.sizes = {
    button: {
        sm: {
            fontSize: '14px',
            fontWeight: '400',
            height: '34px',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingTop: '8px',
            paddingBottom: '8px'
        },
        md: {
            fontSize: '16px',
            fontWeight: '400',
            height: '40px',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingTop: '10px',
            paddingBottom: '10px'
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
            paddingBottom: '8px'
        }
    },
    popOverMenuItem: {
        sm: {
            paddingLeft: '11px',
            paddingRight: '11px',
            paddingTop: '8px',
            paddingBottom: '8px'
        },
        md: {
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingTop: '10px',
            paddingBottom: '10px'
        }
    }
};
exports.variants = {
    primary: {
        buttonBgColor: exports.colors.blue[60],
        buttonBgColorHover: 'rgba(50, 103, 214, 0.9)',
        buttonBgColorActive: 'rgba(50, 103, 214, 1)',
        buttonBgColorDisabled: 'rgba(50, 103, 214, 0.03)',
        buttonTextColor: exports.colors.white,
        buttonTextColorHover: exports.colors.white,
        buttonTextColorActive: exports.colors.white,
        buttonTextColorDisabled: exports.colors.blue[30],
        popoverMenuItemBgColor: exports.colors.white,
        popoverMenuItemBgColorHover: exports.colors.blue[5],
        popoverMenuItemTextColor: exports.colors.gray[90],
        sideBarBgColor: exports.colors.white,
        sideBarMenuItemBgColor: exports.colors.white,
        sideBarMenuItemIconColor: exports.colors.gray[90],
        sideBarMenuItemIconColorHover: exports.colors.blue[60],
        sideBarMenuItemBgColorHover: exports.colors.blue[10],
        sideBarMenuItemTextColor: exports.colors.gray[90]
    },
    secondary: {
        buttonBgColor: 'rgba(50, 103, 214, 0.04)',
        buttonBgColorHover: 'rgba(50, 103, 214, 0.06)',
        buttonBgColorActive: 'rgba(50, 103, 214, 0.06)',
        buttonBgColorDisabled: 'rgba(50, 103, 214, 0.03)',
        buttonTextColor: exports.colors.blue[60],
        buttonTextColorHover: exports.colors.blue[60],
        buttonTextColorActive: exports.colors.blue[60],
        buttonTextColorDisabled: exports.colors.white
    },
    tertiary: {
        buttonBgColor: 'rgba(50, 103, 214, 0.03)',
        buttonBgColorHover: 'rgba(50, 103, 214, 0.05)',
        buttonBgColorActive: 'rgba(50, 103, 214, 0.05)',
        buttonBgColorDisabled: 'rgba(50, 103, 214, 0.03)',
        buttonTextColor: exports.colors.gray[30],
        buttonTextColorHover: exports.colors.gray[30],
        buttonTextColorActive: exports.colors.gray[30],
        buttonTextColorDisabled: exports.colors.gray[30]
    },
    clear: {
        buttonBgColor: exports.colors.white,
        buttonBgColorHover: exports.colors.white,
        buttonBgColorActive: exports.colors.white,
        buttonBgColorDisabled: exports.colors.white,
        buttonTextColor: exports.colors.gray[70],
        buttonTextColorHover: exports.colors.gray[70],
        buttonTextColorActive: exports.colors.gray[70],
        buttonTextColorDisabled: exports.colors.gray[70]
    },
    warning: {
        buttonBgColor: '#f59f03',
        buttonBgColorHover: '#d97706',
        buttonTextColor: '#fff',
        labelBgColor: 'rgba(216, 160, 50, 0.1)',
        labelTextColor: exports.colors.yellow[50],
        borderColor: exports.colors.yellow[50]
    },
    danger: {
        buttonBgColor: '#dd2121',
        buttonBgColorHover: '#b91c1c',
        buttonTextColor: '#fff',
        labelBgColor: 'rgba(224, 42, 71, 0.1)',
        labelTextColor: exports.colors.red[50],
        borderColor: exports.colors.red[50]
    },
    success: {
        alertIconBgColor: '#AFE1AF',
        alertIconFgColor: '#097969',
        buttonBgColor: '#5b9557',
        buttonBgColorHover: '#75B271',
        buttonBgColorActive: exports.colors.green[50],
        buttonTextColor: exports.colors.white,
        buttonTextColorHover: exports.colors.white,
        buttonTextColorActive: exports.colors.white,
        buttonBorderColor: 'transparent',
        labelBgColor: 'rgba(94, 154, 90, 0.1)',
        labelTextColor: exports.colors.green[50],
        borderColor: exports.colors.green[50]
    },
    gray: {
        buttonBgColor: 'rgba(35, 37, 41, 0.04)',
        buttonBgColorHover: 'rgba(35, 37, 41, 0.06)',
        buttonBgColorActive: 'rgba(35, 37, 41, 0.06)',
        buttonBgColorDisabled: 'rgba(35, 37, 41, 0.04)',
        buttonTextColor: exports.colors.gray[70],
        buttonTextColorHover: exports.colors.gray[70],
        buttonTextColorActive: exports.colors.gray[70],
        buttonTextColorDisabled: exports.colors.gray[70],
        labelBgColor: 'rgba(141, 148, 161, 0.1)',
        labelTextColor: exports.colors.gray[50]
    },
    grayBlue: {
        buttonBgColor: 'rgba(50, 103, 214, 0.04)',
        buttonBgColorHover: 'rgba(50, 103, 214, 0.06)',
        buttonBgColorActive: 'rgba(50, 103, 214, 0.06)',
        buttonBgColorDisabled: 'rgba(50, 103, 214, 0.04)',
        buttonTextColor: exports.colors.blue[60],
        buttonTextColorHover: exports.colors.blue[60],
        buttonTextColorActive: exports.colors.blue[60],
        buttonTextColorDisabled: exports.colors.blue[60],
        labelBgColor: exports.colors.blue[10],
        labelTextColor: exports.colors.blue[50]
    },
    grayRed: {
        buttonBgColor: 'rgba(35, 37, 41, 0.02)',
        buttonBgColorHover: 'rgba(35, 37, 41, 0.06)',
        buttonBgColorActive: 'rgba(35, 37, 41, 0.06)',
        buttonBgColorDisabled: 'rgba(35, 37, 41, 0.02)',
        buttonTextColor: exports.colors.red[50],
        buttonTextColorHover: exports.colors.red[50],
        buttonTextColorActive: exports.colors.red[50],
        buttonTextColorDisabled: exports.colors.red[50]
    }
};
