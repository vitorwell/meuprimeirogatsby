import React from 'react'
import {Link} from "gatsby"

const Minipost = () => {
    return (
        <section>
            <header class="major">
                <h2>Ante interdum</h2>
            </header>
            <div class="mini-posts">
                <article>
                    <Link to="#" class="image"><img src="images/pic07.jpg" alt="" /></Link>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                </article>
                <article>
                    <Link to="#" class="image"><img src="images/pic08.jpg" alt="" /></Link>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                </article>
                <article>
                    <Link to="#" class="image"><img src="images/pic09.jpg" alt="" /></Link>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                </article>
            </div>
            <ul class="actions">
                <li><Link to="#" class="button">More</Link></li>
            </ul>
        </section>
    )
}

export default Minipost
