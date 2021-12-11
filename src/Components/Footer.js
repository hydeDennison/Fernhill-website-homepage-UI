import { Link } from "react-router-dom";
import FooterWrapper from "../Styles/Footer.style";

function Footer() {
    return (
        <FooterWrapper>
            <div className="links-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="48.285" height="58.192" viewBox="0 0 48.285 58.192">
                    <path id="Path_72" data-name="Path 72" d="M2713.669-1580.93l-39.872,28.388,39.872,23.952" transform="translate(-2667.414 1583.782)" fill="none" stroke="#000" stroke-width="7" />
                </svg>
                <div className="link-container">
                    <Link to="/about">About us,</Link>
                    <Link to="/about">Contact us,</Link>
                    <Link to="/about">Blog,</Link>
                    <Link to="/about">Services,</Link>
                    <Link to="/about">LinkedIn,</Link>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="48.285" height="58.192" viewBox="0 0 48.285 58.192">
                    <path id="Path_71" data-name="Path 71" d="M2673.8-1580.93l39.872,28.388L2673.8-1528.59" transform="translate(-2671.767 1583.782)" fill="none" stroke="#000" stroke-width="7" />
                </svg>
            </div>
            <div className="footer-contact-links">
                <h4 className="footer-copyright">@fernhill digital</h4>
                <div className="footer-contact">
                    <Link to="/about"> hello@fernhilldigital.com</Link>
                    <Link to="/about">080-342288565</Link>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer;