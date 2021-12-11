import { WhoSection, WhoWrapper } from "../Styles/WhoWeAre.style";
import whoImg from "../Assets/Who-img.png";
import Arrow from "../Assets/Arrow.svg";
import ArrowmMbile from "../Assets/Arrow-mobile.svg";

function WhoWeAre() {
    return (
        <WhoWrapper>
            <h1 className="who-heading">
                We are a full service Nigerian <span>social media marketing agency</span>  with a
                strong performance-led ethos. We strive to provide our clients
                <span>“Data-Driven</span> Digital Marketing With <span>Stunning Results</span>” - whether to improve existing digital marketing
                campaigns or to design your comprehensive online media strategy
                from scratch, we can be of help.
            </h1>
            <img src={Arrow} alt="arrow-img" className="arrow" />
            <img src={ArrowmMbile}alt="arrow-img"  className="arrow-mobile" />
            <WhoSection className="who-section">
                <div className="who-section-container">
                    <img src={whoImg} alt="" className="who-section-img" />
                </div>
                <div className="who-section-container">
                    <p className="who-text">
                        Several years of experience helping great brands grow,
                        improving traction for businesses and keeping entrepreneurs  smiling to the bank
                    </p>
                </div>
            </WhoSection>
        </WhoWrapper>
    )
}

export default WhoWeAre;