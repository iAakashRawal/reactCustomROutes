import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './../App.css';

const Sidebar = () => {
    const locate = useLocation().pathname
    console.log(locate)
    const data = {
        name : "100nu",
        Lname : "rawal"
    }
    return (
        <div>
            <div className=' shadow'>
                <nav className='sides'>
                    <ul className='ps-0'>
                        <li className={locate === "/" ? "active ps-3" : "ps-3"}>
                            <Link to={"/"}  ><i className="fa- fa-home text-info"></i>Home</Link>
                        </li>
                        <li className={locate === "/view" ? "active ps-3" : "ps-3"}>
                            <Link className={'link'} to= "/view">
                                View
                            </Link>
                        </li>
                        <li className={locate === "/blacklist" ? "active ps-3" : "ps-3"}>
                            <Link to={`/blacklist`} className="link">blacklist</Link>
                        </li>
                        <li className={locate === "/SpamWord" ? "active ps-3" : "ps-3"}>
                            <Link to={`/SpamWord`} className="link">SpamWord</Link>
                        </li>
                        <li className={locate === "/Sidebar" ? "active ps-3" : "ps-3"}>
                            <Link to={`/Sidebar`} className="link">Sidebar</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
