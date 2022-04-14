import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <ul>
            <li>
                <Link to={'/profile'}>FEED</Link>
            </li>
            <li>
                <a href='#'>NETWORK</a>
            </li>
            <li>
                <a href='#'>JOB</a>
            </li>
            <li>
                <a href='#'>CHAT</a>
            </li>
            <li>
                <a href='#'>NOTICES</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav