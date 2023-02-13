import { Meta } from "@storybook/react/types-6-0";
import { MenuItem } from "@mui/material";
import React from "react";
import { colors } from "../../theme";
import {
    Title,
    Subtitle,
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY,
  } from '@storybook/addon-docs';

export default {
    title: 'elements/Inputs/MenuItem',
    component: MenuItem,
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description>This component shares the same properties as MUI&apos;s MenuItem component. Futher documentation here: https://mui.com/material-ui/api/menu-item/</Description>
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories />
                </>
            )
        }
    }
} as Meta

export const Default = {
    args: {
        autofocus: false,
        value: "1",
        children: <span>First item</span>,
        sx: {
            backgroundColor: 'white',
            height: '40px',
            width: '150px',
            color: colors.gray[90],
            fontFamily: 'IBM Plex Sans',
        },
        classes: {},
        component: null,
        dense: false,
        disableGutters: false,
        divider: false,
        focusVisibleClassName: '',
        selected: false,
    }
}
