import { Link } from "react-router-dom";
import MobileNav from "../Styles/MobileMenu.styles";
import close from "../Assets/Close.svg"

function MobileMenu() {
    return (
        <MobileNav>
            <div className="close">
                <img src={close} alt="" />
            </div>
            <div className="mobile-nav-link-wrapper">
                <Link to="/home">About</Link>
                <Link to="/home">Services</Link>
                <Link to="/home">Blog</Link>
                <Link to="/home">Contact</Link>
            </div>
        </MobileNav>
    )
}
export default MobileMenu;