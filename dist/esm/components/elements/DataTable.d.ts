/// <reference types="react" />
import { DataGridProps, GridColDef } from '@mui/x-data-grid';
export interface DataTableProps extends DataGridProps {
    /** Array of GridColDef. More info at: https://mui.com/x/api/data-grid/grid-col-def/ */
    columns: GridColDef[];
    /** Array of objects. */
    rows: Array<object>;
}
/** Based on MUI-X DataGrid so it has the same Props and capabilities. Documentation here: https://mui.com/x/react-data-grid/  and here: https://mui.com/x/api/data-grid/data-grid/ .
 *   Example columns and rows located on src/stories/elements/DataTable.stories.tsx
*/
export declare const DataTable: ({ columns, rows, ...props }: DataTableProps) => JSX.Element;
