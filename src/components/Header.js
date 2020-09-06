import React from 'react'
import {Link} from "gatsby"

const Header = () => {
    return (
        <header id="header">
           <Link to="index.html" class="logo"><strong>Editorial</strong> by HTML5 UP</Link>
            <ul class="icons">
                <li><Link to="#" class="icon brands fa-twitter"><span class="label">Twitter</span></Link></li>
                <li><Link to="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></Link></li>
                <li><Link to="#" class="icon brands fa-snapchat-ghost"><span class="label">Snapchat</span></Link></li>
                <li><Link to="#" class="icon brands fa-instagram"><span class="label">Instagram</span></Link></li>
                <li><Link to="#" class="icon brands fa-medium-m"><span class="label">Medium</span></Link></li>
            </ul>
        </header>
    )
}

export default Header
