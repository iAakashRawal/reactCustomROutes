import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration from './Registration'
import Sidebar from './Sidebar'
import View from './View'
import ViewId from './ViewId'

const Allroute = () => {
    const pathname = "View"
    const pn = "10"    
    return (
        <div>
            <Routes>
                <Route path={`/${pathname}`} element={<View />} />
                <Route path='/side' element={<Sidebar />} />
                <Route path={`/viewId/${pn}`} element={<ViewId />} />
                <Route path={`/Registration`} element={<Registration />} />
            </Routes>            

        </div>

    )
}

export default Allroute
