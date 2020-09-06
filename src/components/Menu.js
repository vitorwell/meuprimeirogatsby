import React from 'react'
import {Link} from "gatsby"

const Menu = () => {
    return (
        <nav id="menu">
            <header class="major">
                <h2>Menu</h2>
            </header>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/blogpost">Blog</Link></li>
                <li><Link to="elements.html">Elements</Link></li>
                <li>
                    <span class="opener">Submenu</span>
                    <ul>
                        <li><Link to="#">Lorem Dolor</Link></li>
                        <li><Link to="#">Ipsum Adipiscing</Link></li>
                        <li><Link to="#">Tempus Magna</Link></li>
                        <li><Link to="#">Feugiat Veroeros</Link></li>
                    </ul>
                </li>
                <li><Link to="#">Etiam Dolore</Link></li>
                <li><Link to="#">Adipiscing</Link></li>
                <li>
                    <span class="opener">Another Submenu</span>
                    <ul>
                        <li><Link to="#">Lorem Dolor</Link></li>
                        <li><Link to="#">Ipsum Adipiscing</Link></li>
                        <li><Link to="#">Tempus Magna</Link></li>
                        <li><Link to="#">Feugiat Veroeros</Link></li>
                    </ul>
                </li>
                <li><Link to="#">Maximus Erat</Link></li>
                <li><Link to="#">Sapien Mauris</Link></li>
                <li><Link to="#">Amet Lacinia</Link></li>
            </ul>
        </nav>

    )
}

export default Menu
