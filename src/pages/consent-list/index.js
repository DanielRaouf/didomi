import { DataGrid } from "@mui/x-data-grid";
import { useUsersConsents } from "../../data";

const ListConsents = () => {
    const { list } = useUsersConsents()
    if (!list) return <>No Results</>
    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
        },
        {
            field: 'consents',
            headerName: 'Consents',
            sortable: false,
            flex: 4,
            valueGetter: (params) => `${Object.keys(params.row.consents).filter((key) => params.row.consents[key]).join(',')}`,
        },
    ]
    return (
        <div style={{ height: 210, width: '100%' }}>
            <DataGrid
                rows={list}
                columns={columns}
                pageSize={2}
                rowsPerPageOptions={[2,5]}
                disableSelectionOnClick
            />
        </div>
    )

}

export default ListConsents;
