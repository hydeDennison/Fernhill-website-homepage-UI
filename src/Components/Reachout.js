import { Link } from "react-router-dom";
import ButtonWrapper from "../Styles/Button.style";
import ReachOutWrapper from "../Styles/Reachout.style";
import ReachOutimg from "../Assets/ReachOutimg.png"

function ReachOut() {
    return (
        <ReachOutWrapper className="reach-out-wrapper">
            <div className="reachout-content">
                <h1 className="reachout-heading">
                    Let's help you bring more customer
                    satisfying and profitable products to the market.
                </h1>
                <ButtonWrapper className="reachout-btn">
                    <Link to="/about">Get in touch</Link>
                </ButtonWrapper>
            </div>
            <img src={ReachOutimg} alt="" className="reachout-img" />
        </ReachOutWrapper>
    )
}

export default ReachOut;