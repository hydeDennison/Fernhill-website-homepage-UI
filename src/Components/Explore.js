
import ExploreWrapper from "../Styles/Explore.style";
import { BarLarge, BarSmall } from "./Bars";
import ListItem from "./ListItem";



function Explore() {
    return (
        <ExploreWrapper className="Explore-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" className="circle-big" viewBox="0 0 375 375">
                <circle id="Ellipse_2" data-name="Ellipse 2" cx="187.5" cy="187.5" r="187.5" fill="rgba(244,184,62,0.05)" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="circle-small" viewBox="0 0 375 375">
                <circle id="Ellipse_2" data-name="Ellipse 2" cx="187.5" cy="187.5" r="187.5" fill="rgba(244,184,62,0.05)" />
            </svg>
            <div className="explore-container">
                <h1 className="explore-heading">Explore our vast services designed to help your business grow !</h1>
                <p className="explore-text">Several years of experience helping great brands grow, improving traction for businesses and keeping entrepreneurs  smiling to the bank</p>
                <ul className="explore-list">
                    <ListItem text="digital marketting."/>
                    <ListItem text="Social media managment."/>
                    <ListItem text="Influencer marketing."/>
                    <ListItem text="Content strategy."/>
                    <ListItem text="Content curation and development."/>
                </ul>

            </div>
            <div className="explore-container">
                <svg xmlns="http://www.w3.org/2000/svg" className="explore-arrow"  viewBox="0 0 265.647 236.124">
                    <g id="Arrow-mobile" transform="translate(1.287 0)">
                        <path id="Path_70" data-name="Path 70" d="M0,284.251C98.075,29.921,9.973,0,9.973,0" transform="matrix(0.616, 0.788, -0.788, 0.616, 223.993, 22.982)" fill="none" stroke="#f4b83e" strokeWidth="3" />
                        <path id="Polygon_1" data-name="Polygon 1" d="M19.879,0,39.759,26.638H0Z" transform="translate(233.903 0) rotate(40)" fill="#f4b83e" />
                    </g>
                </svg>
                <BarSmall />
                <BarLarge/>
            </div>
        </ExploreWrapper>
    )
}

export default Explore;
