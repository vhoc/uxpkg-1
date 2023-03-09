"use strict";
exports.__esModule = true;
exports.DataTable = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var x_data_grid_1 = require("@mui/x-data-grid");
var styles_1 = require("@mui/material/styles");
var theme_1 = require("../../theme");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
/** Based on MUI-X DataGrid so it has the same Props and capabilities. Documentation here: https://mui.com/x/react-data-grid/  and here: https://mui.com/x/api/data-grid/data-grid/ .
 *   Example columns and rows located on src/stories/elements/DataTable.stories.tsx
*/
var DataTable = function (_a) {
    var columns = _a.columns, rows = _a.rows, props = tslib_1.__rest(_a, ["columns", "rows"]);
    var MyDataGrid = (0, styles_1.styled)(x_data_grid_1.DataGrid)({
        '.MuiDataGrid-root, *': {
            fontFamily: 'IBM Plex Sans'
        },
        '.MuiDataGrid-columnHeaders': {
            backgroundColor: theme_1.colors.gray[5],
            maxHeight: '48px !important',
            minHeight: '48px !important',
            lineHeight: '48px !important',
            height: '48px !important'
        },
        '.MuiDataGrid-columnHeaderTitle': tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.body.semiBold), { color: theme_1.colors.gray[90] }),
        '.MuiDataGrid-cell': tslib_1.__assign({ maxHeight: '48px !important', minHeight: '48px !important', lineHeight: '48px !important', height: '48px !important' }, theme_1.theme.font.body.regular),
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
    return (react_1["default"].createElement("div", { style: {
            height: '400px',
            width: '100%'
        } },
        react_1["default"].createElement(MyDataGrid, tslib_1.__assign({ rows: rows, columns: columns, disableColumnMenu: true, slots: {
                columnSortedAscendingIcon: function () { return react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faCaretUp, size: 'sm' }); },
                columnSortedDescendingIcon: function () { return react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faCaretDown, size: 'sm' }); }
            } }, props))));
};
exports.DataTable = DataTable;
