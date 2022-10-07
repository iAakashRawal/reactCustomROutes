import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Label, Row } from 'reactstrap'
import Sidebar from './Sidebar'
import View from './View'
import ViewId from './ViewId'

const Allroute = () => {
    const location = useLocation()
    const pathname = "View"
    const pn = "10"
    console.log("location",location)
    return (
        <div>
            <Routes>
                <Route path={`/${pathname}`} element={<View />} />
                <Route path='/side' element={<Sidebar />} />
                <Route path={`/viewId/${pn}`} element={<ViewId />} />
            </Routes>
            <Label className='fw-bold fs-2 text-center text-info'>{location.pathname}</Label><br />

        </div>

    )
}

export default Allroute
