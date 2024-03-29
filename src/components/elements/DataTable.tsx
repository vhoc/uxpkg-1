import React from 'react'
import { DataGrid, DataGridProps, GridColDef } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import { colors, theme } from '../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/pro-solid-svg-icons'


export interface DataTableProps extends DataGridProps {
    /** Array of GridColDef. More info at: https://mui.com/x/api/data-grid/grid-col-def/ */
    columns: GridColDef[]
    /** Array of objects. */
    rows: Array<object>
}

/** Based on MUI-X DataGrid so it has the same Props and capabilities. Documentation here: https://mui.com/x/react-data-grid/  and here: https://mui.com/x/api/data-grid/data-grid/ .
 *   Example columns and rows located on src/stories/elements/DataTable.stories.tsx
*/
export const DataTable = ({ columns, rows, ...props }: DataTableProps) => {

    const MyDataGrid = styled(DataGrid)({
        '.MuiDataGrid-root, *': {
            fontFamily: 'IBM Plex Sans',
        },
        '.MuiDataGrid-columnHeaders': {
            backgroundColor: colors.gray[5],
            maxHeight: '48px !important',
            minHeight: '48px !important',
            lineHeight: '48px !important',
            height: '48px !important',
        },
        '.MuiDataGrid-columnHeaderTitle': {
            ...theme.font.body.semiBold,
            color: colors.gray[90],
        },
        '.MuiDataGrid-cell': {
            maxHeight: '48px !important',
            minHeight: '48px !important',
            lineHeight: '48px !important',
            height: '48px !important',
            ...theme.font.body.regular,
        },
        '.MuiTypography-root, .MuiTypography-body1, .MuiListItemText-primary': {
            fontFamily: 'IBM Plex Sans',
        },
        '.MuiDataGrid-menu': {
            fontFamily: 'IBM Plex Sans',
        },
        '.MuiDataGrid-menuList, *': {
            fontFamily: 'IBM Plex Sans',
        },
        '.MuiDataGrid-row.Mui-selected, .MuiDataGrid-row:hover, .MuiDataGrid-row': {
            maxHeight: '48px !important',
            minHeight: '48px !important',
            lineHeight: '48px !important',
            height: '48px !important',
        }
    })

    return (
        <div
            style={{
                height: '400px',
                width: '100%',
            }}
        >

            <MyDataGrid
                rows={rows}
                columns={columns}
                disableColumnMenu={true}
                slots={{
                    columnSortedAscendingIcon: () => <FontAwesomeIcon icon={faCaretUp} size={'sm'}/>,
                    columnSortedDescendingIcon: () => <FontAwesomeIcon icon={faCaretDown} size={'sm'}/>,
                }}                
                {...props}
            />
        
        </div>
    )

}