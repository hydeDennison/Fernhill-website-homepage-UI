import TestimonialWrapper from "../Styles/Testimonial.style";
import AvatarImg from "../Assets/Avatarimg.jpg";

function Testimonial() {
    return (
        <TestimonialWrapper>
            <h1 className="testimonial-heading">What our customers say</h1>
            <div className="testimonial-wrapper">
                <div className="testimonial-container">
                    <div className="avatar-section">
                        <div className="avatar">
                            <img src={AvatarImg} alt="" />
                        </div>
                        <div className="avatar-content">
                            <h2 className="avatar-title">Mark hooland</h2>
                            <h4 className="avatar-subtitle">CFO cali organics</h4>
                        </div>
                    </div>
                    <p className="testimonial-text">
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Rem nemo quibusdam culpa
                        doloribus natus quasi qui nulla inventore,
                        mollitia hic eveniet. Nisi quibusdam vitae vel
                        nam vero recusandae accusamus architecto.
                    </p>
                </div>
                <div className="testimonial-container">
                    <div className="avatar-section">
                        <div className="avatar">
                            <img src={AvatarImg} alt="" />
                        </div>
                        <div className="avatar-content">
                            <h2 className="avatar-title">Mark hooland</h2>
                            <h4 className="avatar-subtitle">CFO cali organics</h4>
                        </div>
                    </div>
                    <p className="testimonial-text">
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Rem nemo quibusdam culpa
                        doloribus natus quasi qui nulla inventore,
                        mollitia hic eveniet. Nisi quibusdam vitae vel
                        nam vero recusandae accusamus architecto.
                    </p>
                </div>
            </div>
        </TestimonialWrapper>
    )
}

export default Testimonial;