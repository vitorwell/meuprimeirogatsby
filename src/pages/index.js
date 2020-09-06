import React from "react"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Articles from "../components/Articles"
import Features from "../components/Features"
import Layout from "../components/Layout"


const index = () => {
    return (
<Layout>


			
    <div id="main">
        <div class="inner">

            <Header />

            <Banner />

            <Features />

            <Articles />

        </div>
    </div>





</Layout>
    )
}

export default index
