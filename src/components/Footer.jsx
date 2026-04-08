import "../styles/footer.scss"
import { NavLink } from 'react-router-dom'


function Footer(){

return (

<footer>
<nav>
            <ul className='header__navbar'>
                
                <li className='header__navbar__li'><NavLink className="header__navbar__li__link" to="/Mentions">Mentions Légales</NavLink></li>
                <li className='header__navbar__li' ><NavLink className="header__navbar__li__link" to="/Confidentialite">Confidentialité</NavLink></li>
                <li className='header__navbar__li' ><NavLink className="header__navbar__li__link" to="/Utilisation">Conditions d'utilisation</NavLink></li>


             </ul>
        </nav>
</footer>
)
}

export default Footer