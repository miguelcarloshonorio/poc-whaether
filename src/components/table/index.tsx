import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { WorldBankResponse } from 'src/gateways/interfaces/worldBank';

export interface TableProps {
    dataSource: WorldBankResponse[]
}

const CountryTable = (props: TableProps) => {
    const { dataSource } = props;

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'iso2Code', headerName: 'Código ISO', width: 130 },
        { field: 'name', headerName: 'Country Name', width: 130 },
        { field: 'capitalCity', headerName: 'Capital City', width: 130 },
        { field: 'longitude', headerName: 'Longitude', width: 130 },
        { field: 'latitude', headerName: 'Latitude', width: 130 },
    ];

    return (
        <div style={{ height: 200, width: '100%' }}>
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                    <DataGrid
                        getRowId={(row) => row.id}
                        rows={dataSource}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
}

export default CountryTable;