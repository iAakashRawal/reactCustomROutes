import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Label } from 'reactstrap'

const ViewId = () => {
    const [data, setData] = useState(0)
    return (
        <div>
            <Link to={`/view`} className='btn btn-outline-primary'>back</Link><br />
            <Label className='fw-bold fs-2'>{data}</Label><br />
            <Link onClick={() => { setData(10) }} className='btn btn-outline-success'>getId</Link>
        </div>
    )
}

export default ViewId
