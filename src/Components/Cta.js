import ButtonWrapper from "../Styles/Button.style";
import ctaImg from "../Assets/img1.png";
import { Link } from "react-router-dom";
import CtaWrapper from "../Styles/Cta.style";

function Cta(){
    return(
        <CtaWrapper className="cta-wrapper">
            <div className="cta-container">
                <div className="cta-content">
                    <h1 className="cta-content-heading">High performance social media marketing services that stand out </h1>
                    <p className="cta-content-text">We  leverage modern digital marketing strategies from the future to help your business stand out from the crowds.</p>
                    <ButtonWrapper>
                        <Link to='/home'>Get started</Link>
                    </ButtonWrapper>
                </div>
            </div>
            <div className="cta-container">
                <img src={ctaImg} alt="" className="cta-img" />
            </div>
        </CtaWrapper>
    )
}

export default Cta