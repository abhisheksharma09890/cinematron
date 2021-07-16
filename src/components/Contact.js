import React from 'react'
import './Contact.css';


 function Contact() {

    return (
        <div className="contact">
            <img src="/images/freeLogo.jpeg"></img>
            <div className="quick__links">
                <h4>Quick links:</h4>
                <a href="/#NETFLIX ORIGINALS">Netflix Originals |</a>
                <a href="/#TRENDING NOW">Trending now |</a>
                <a href="/#TOP RATED">Top Rated |</a>
                <a href="/#ACTON MOVIES">Action Movies |</a>
                <a href="/#COMEDY MOVIES">Comedy Movies |</a>
                <a href="/#HORROR MOVIES">Horror Movies |</a>
                <a href="/#ROMANCE MOVIES">Romance Movies |</a>
                <a href="/#DOCUMENTARIES">Documentaries</a>
            </div>
            <div className="copyright">
                <p>Copyright © 2021. Cinematron-All Rights Reserved</p>
            </div>
        </div>
    )
}
export default React.memo(Contact);
