import React from 'react'
import { Link } from 'react-router-dom'

const View = () => {
    function sendData(){
        
    }
    return (
        <div>
            <Link onClick={() => { sendData() }} to={`/viewId/${10}`} className='btn btn-outline-primary'>add</Link><br/>
            {/* <Label className='fw-bold fs-2'>{data}</Label><br /> */}
        </div>
    )
}

export default View
