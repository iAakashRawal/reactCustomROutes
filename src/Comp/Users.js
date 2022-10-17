import React from 'react'
import DataTable from 'react-data-table-component';

const Users = () => {
    const columns = [
        {
            name: 'firstName',
            selector: row => row.title,
        },
        {
            name: 'Email',
            selector: row => row.year,
        },
        {
            name: 'DOB',
            selector: row => row.year,
        },
        {
            name: 'Mobile',
            selector: row => row.year,
        },
        {
            name: 'Degree',
            selector: row => row.year,
        },
        {
            name: 'Address',
            selector: row => row.year,
        },
        {
            name: 'Qualifications',
            selector: row => row.year,
        },
    ];
    



    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]


    return (
        <div className='p-5 m-5 border shadow'>
            <h1>User details</h1>
            <DataTable
                columns={columns}
                data={data}
            />
        </div>
    )
}

export default Users
