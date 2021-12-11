import { Link } from "react-router-dom";
import Logo from "../Assets/Logo";
import Hamburger from "../Assets/Hamburger.svg"
import NavWrapper from "../Styles/Navbar.style";

function Navbar(){
    return(
        <NavWrapper>
            <Logo/>
            <div className="nav-links">
                <Link to="/home">About</Link>
                <Link to="/home">Services</Link>
                <Link to="/home">blog</Link>
                <Link to="/home">Contact</Link>
            </div>
            <button className="hamburger-button">
                <img alt="" src={Hamburger} />
            </button>
        </NavWrapper>
    )
}
export default Navbar;