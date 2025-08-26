import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <nav className='navbar'>
            <h2>SwachhBharat</h2>
              <ul className='nav-list'>
                <li><Link to={"/state"} className='nav-link'>State</Link></li>
                <li><Link to={"/language"} className='nav-link'>Language</Link></li>
                <li><Link to={"/country"} className='nav-link'>Country</Link></li>
                {/* <li><Link to={"/pledge"} className='nav-link'>Pledge</Link></li>   */}
                                  
                <li><Link to={"/dashboard"} className='nav-link'>DashBoard</Link></li>
                <li><Link to={"/user"} className='nav-link'>User</Link></li>
                <li><Link to={"/"} className='nav-link'>Logout</Link></li>
              </ul>
        </nav> 
    </div>
  )
}

export default Header