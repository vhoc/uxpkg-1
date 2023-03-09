import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { DataTable } from "../../components/elements/DataTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/pro-solid-svg-icons";
import { Typography } from "../../components/elements/Typography";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Button } from "../../components/elements/Button";
import { faBrowser, faEllipsisV } from "@fortawesome/pro-regular-svg-icons";
import { MenuButton } from "../../components/elements/MenuButton";

export default {
    title: 'composite/DataTable',
    component: DataTable,
} as Meta

export const Default = {
    args: {
        columns: [
            {
                field: 'name',
                headerName: 'Name',
                width: 250,
            },
            {
                field: 'requestedFor',
                headerName: 'Requested for',
                width: 200,
                renderCell: (params: GridRenderCellParams) => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
                        <FontAwesomeIcon icon={faUser} />
                        <Typography variant={'body-regular'}>{params.value}</Typography>
                    </div>
                )
            },
            {
                field: 'resources',
                headerName: 'Resources',
                width: 130,
                renderCell: (params: GridRenderCellParams) => (
                    <Button
                        icon={faBrowser}
                        iconColor="#A6ABB6"
                        iconPosition="start"
                        size="sm"
                        variant="grayBlue"
                        onClick={params.value.onClick}
                        >
                        {params.value.amount.toString()}
                    </Button>
                ) 
            },
            {
                field: 'submittedOn',
                headerName: 'Submitted on',
                width: 240,
            },
            {
                field: 'detailsButton',
                headerName: '',
                sortable: false,
                renderCell: (params: GridRenderCellParams) => (
                    <Button
                        size="sm"
                        variant="grayBlue"
                        onClick={params.value.onClick}
                        >
                        View Details
                    </Button>
                ),
                width: 150,
            },
            {
                field: 'menuButton',
                headerName: '',
                sortable: false,
                width: 48,
                renderCell: (params: GridRenderCellParams) => (
                    <MenuButton
                        menuItems={params.value.menuItems}
                    />
                )
            },
        ],
        rows: [
            {
                id: 1 ,
                name: 'CatatumboRiver',
                requestedFor: 'Andrew Jackson',
                resources: {
                    id: 1,
                    amount: 3,
                    onClick: () => alert(`Resources button clicked for id: ${String(1)}`)
                },
                submittedOn: 'Jan 12, 2023 4:32 PM',                
                detailsButton: {
                    id: 1,
                    onClick: () => alert(`View details button clicked for id: 1`),
                },
                menuButton: {
                    id: 1,
                    menuItems: [
                        {
                            title: 'Option 1',
                            action: () => alert(`Row 1 Option 1!`),
                        },
                        {
                            action: () => alert(`Row 1 Option 2!`),
                            title: 'Option 2',
                        },
                        {
                            title: 'Option 3',
                            action: () => alert(`Row 1 Option 3!`),
                        }
                    ],
                    title: <FontAwesomeIcon icon={faEllipsisV} />
                        
                },
            },
            {
                id: 2 ,
                name: 'CatatumboRiver',
                requestedFor: 'Andrew Jackson',
                resources: {
                    id: 2,
                    amount: 3,
                    onClick: () => alert(`Resources button clicked for id: ${String(2)}`)
                },
                submittedOn: 'Jan 12, 2023 4:32 PM',
                detailsButton: {
                    id: 2,
                    onClick: () => alert(`View details button clicked for id: 2`),
                },
                menuButton: {
                    id: 2,
                    menuItems: [
                        {
                            title: 'Option 1',
                            action: () => alert(`Row 2 Option 1!`),
                        },
                        {
                            action: () => alert(`Row 2 Option 2!`),
                            title: 'Option 2',
                        },
                        {
                            title: 'Option 3',
                            action: () => alert(`Row 2 Option 3!`),
                        }
                    ],
                    title: <FontAwesomeIcon icon={faEllipsisV} />
                        
                },
            },
        ]
    }
}