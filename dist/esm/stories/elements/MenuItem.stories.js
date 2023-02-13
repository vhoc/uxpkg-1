import { MenuItem } from "@mui/material";
import React from "react";
import { colors } from "../../theme";
import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY, } from '@storybook/addon-docs';
export default {
    title: 'elements/Inputs/MenuItem',
    component: MenuItem,
    parameters: {
        docs: {
            page: function () { return (React.createElement(React.Fragment, null,
                React.createElement(Title, null),
                React.createElement(Subtitle, null),
                React.createElement(Description, null, "This component shares the same properties as MUI's MenuItem component. Futher documentation here: https://mui.com/material-ui/api/menu-item/"),
                React.createElement(Primary, null),
                React.createElement(ArgsTable, { story: PRIMARY_STORY }),
                React.createElement(Stories, null))); }
        }
    }
};
export var Default = {
    args: {
        autofocus: false,
        value: "1",
        children: React.createElement("span", null, "First item"),
        sx: {
            backgroundColor: 'white',
            height: '40px',
            width: '150px',
            color: colors.gray[90],
            fontFamily: 'IBM Plex Sans'
        },
        classes: {},
        component: null,
        dense: false,
        disableGutters: false,
        divider: false,
        focusVisibleClassName: '',
        selected: false
    }
};
