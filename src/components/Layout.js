import React from 'react'
import Menu from "./Menu"
import Contato from "./Contato"
import Footer from "./Footer"
import Search from "./Search"
import Minipost from "./Minipost"
import "../assets/css/main.css"
import "../assets/css/fontawesome-all.min.css"

const Layout = ({children}) => {
    return (
        <>
        <div id="wrapper">
            <main>{children}</main> 

            <div id="sidebar">
                <div class="inner">

                    <Search />

                    <Menu />

                    <Minipost />

                    <Contato />

                    <Footer />

                </div>

            </div>

            </div>
        </>
    )
}

export default Layout
