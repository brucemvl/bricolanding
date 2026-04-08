import "../styles/header.scss"
import logo from "../assets/briconnect3.png"

function Header(){

    return(
        <header>
        <img src={logo} className="logo" alt="logo"/>
                </header>
    )
}

export default Header