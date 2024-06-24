import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/footer.css";

const Footer =() =>{
    return(
        <footer>
            <div>
                <h1>Horraires d'ouverture</h1>
                <p>xxhxx à xxhxx</p>
                <p>Du JOUR au JOUR</p>
            </div>
            <div id="social">
                <h1>Réseaux sociaux</h1>
                <Link to='https://www.facebook.com/profile.php?id=61558369631745&mibextid=LQQJ4d&rdid=QSKq167EO6nljJ3X&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FXupEFKnEW5DxJVqX%2F%3Fmibextid%3DLQQJ4d' target="_blank">
                    <i className="fa-brands fa-square-facebook fa-2xl"></i> Facebook
                </Link>
                <Link to='https://www.instagram.com/ve_coiffure_esthetique?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target="_blank">
                <i className="fa-brands fa-square-instagram fa-2xl"></i> Instagram
                </Link>
            </div>
            <div>
                <h1>Contact</h1>
                <address>
                    211 Chemin Chalet
                </address>
                <address>
                    97430 Le Tampon, Bras-Creux
                </address>
                <p>02.62.08.61.41 || 06.92.59.11.54</p>
                <p></p>
            </div>
            <div>
                <h1>Mentions légales</h1>
            </div>
            <div id="link">
                <h1>Prestations</h1>
                <Link to='/coiffure'><p>Coiffure</p></Link>
                <Link to='/wellness'><p>Bien-être</p></Link>
                <Link to='/'><p>Esthétique</p></Link>
                <Link to='/contact'><p>Contacte</p></Link>
            </div>
        </footer>
    )
}

export default Footer;