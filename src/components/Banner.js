import React from 'react'
import {Link} from "gatsby"

const Banner = () => {
    return (
        <section id="banner">
            <div class="content">
                <header>
                    <h1>Hi, I’m Editorial<br />
                    by HTML5 UP</h1>
                    <p>A free and fully responsive site template</p>
                </header>
                <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                <ul class="actions">
                    <li><Link to="#" class="button big">Learn More</Link></li>
                </ul>
            </div>
            <span class="image object">
                <img src="/images/pic10.jpg" alt="" />
            </span>
        </section>
    )
}

export default Banner
