import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <div className='border shadow'>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/`} ><i class="fa-solid fa-a text-info"></i></Link>
                        </li>
                        <li>
                            <Link to={`/view`}>View</Link>
                        </li>
                        <li>
                            <Link to={`/side`} className="">blacklist</Link>
                        </li>
                        <li>
                            <Link to={`/side`} className="">SpamWord</Link>
                        </li>
                        <li>
                            <Link to={`/side`} className="">Sidebar</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
