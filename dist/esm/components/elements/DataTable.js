import { __assign, __rest } from "tslib";
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { colors, theme } from '../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/pro-solid-svg-icons';
/** Based on MUI-X DataGrid so it has the same Props and capabilities. Documentation here: https://mui.com/x/react-data-grid/  and here: https://mui.com/x/api/data-grid/data-grid/ .
 *   Example columns and rows located on src/stories/elements/DataTable.stories.tsx
*/
export var DataTable = function (_a) {
    var columns = _a.columns, rows = _a.rows, props = __rest(_a, ["columns", "rows"]);
    var MyDataGrid = styled(DataGrid)({
        '.MuiDataGrid-root, *': {
            fontFamily: 'IBM Plex Sans'
        },
        '.MuiDataGrid-columnHeaders': {
            backgroundColor: colors.gray[5],
            maxHeight: '48px !important',
            minHeight: '48px !important',
            lineHeight: '48px !important',
            height: '48px !important'
        },
        '.MuiDataGrid-columnHeaderTitle': __assign(__assign({}, theme.font.body.semiBold), { color: colors.gray[90] }),
        '.MuiDataGrid-cell': __assign({ maxHeight: '48px !important', minHeight: '48px !important', lineHeight: '48px !important', height: '48px !important' }, theme.font.body.regular),
        '.MuiTypography-root, .MuiTypography-body1, .MuiListItemText-primary': {
            fontFamily: 'IBM Plex Sans'
        },
        '.MuiDataGrid-menu': {
            fontFamily: 'IBM Plex Sans'
        },
        '.MuiDataGrid-menuList, *': {
            fontFamily: 'IBM Plex Sans'
        },
        '.MuiDataGrid-row.Mui-selected, .MuiDataGrid-row:hover, .MuiDataGrid-row': {
            maxHeight: '48px !important',
            minHeight: '48px !important',
            lineHeight: '48px !important',
            height: '48px !important'
        }
    });
    return (React.createElement("div", { style: {
            height: '400px',
            width: '100%'
        } },
        React.createElement(MyDataGrid, __assign({ rows: rows, columns: columns, disableColumnMenu: true, slots: {
                columnSortedAscendingIcon: function () { return React.createElement(FontAwesomeIcon, { icon: faCaretUp, size: 'sm' }); },
                columnSortedDescendingIcon: function () { return React.createElement(FontAwesomeIcon, { icon: faCaretDown, size: 'sm' }); }
            } }, props))));
};
