import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './../App.css';

const Sidebar = () => {
    const locate = useLocation().pathname    
    
    return (
        <div>
            <div className='shadow ms-4' style={{height:720}}>
                <nav className='sides'>
                    <ul className='ps-0'>
                        <li className={locate === "/Registration" ? "active ps-3 list-group-item" : "ps-3 list-group-item"}>
                            <Link to={"/Registration"}  ><i className="fa- fa-home text-info"></i>Registration</Link>
                        </li>
                        <li className={locate === "/view" ? "active ps-3 list-group-item" : "ps-3 list-group-item"}>
                            <Link className={'link'} to= "/view">
                                View
                            </Link>
                        </li>
                        <li className={locate === "/blacklist" ? "active ps-3 list-group-item" : "ps-3 list-group-item"}>
                            <Link to={`/users`} className="link">Users</Link>
                        </li>
                        <li className={locate === "/SpamWord" ? "active ps-3 list-group-item" : "ps-3 list-group-item"}>
                            <Link to={`/SpamWord`} className="link">SpamWord</Link>
                        </li>
                        <li className={locate === "/Sidebar" ? "active ps-3 list-group-item" : "ps-3 list-group-item"}>
                            <Link to={`/Sidebar`} className="link">Sidebar</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
