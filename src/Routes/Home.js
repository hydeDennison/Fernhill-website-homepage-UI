import Cta from "../Components/Cta";
import Explore from "../Components/Explore";
import Footer from "../Components/Footer";
import ReachOut from "../Components/Reachout";
import Testimonial from "../Components/Testimonial";
import WhoWeAre from "../Components/WhoWeAre";

function Home(){
    return(
        <>
            <Cta />
            <WhoWeAre />
            <Explore />
            <Testimonial />
            <ReachOut />
            <Footer/>
        </>
    )
}
export default Home;