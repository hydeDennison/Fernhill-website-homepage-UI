import styled from "styled-components";
import {secondaryColor} from "../Assets/Utility"

const TestimonialWrapper = styled.div`
padding: 45px;
display: flex;
flex-direction: column;
align-items: center;
        @media (max-width:600px){
            padding: 50px 20px;
        }
.testimonial-heading{
    color: ${secondaryColor};
        @media (max-width:600px){
            font-size: 1.7rem;
        }
         @media (max-width:370px){
             font-size: 1.5rem;
        }
}
.testimonial-wrapper{
    display: flex;
    width: 100%;
    margin:45px;
    justify-content: center;
        @media (max-width:600px){
            flex-direction: column;
        }
    .testimonial-container{
        width: 600px;
        height: 400px;
        margin-left: 45px;
        padding: 150px 30px;
        padding-top: 20px;
        background-color: #F6F4F4;
        @media (max-width:600px){
            width: 100%;
            height: fit-content;
            margin-left: 0;
            padding: 30px;
            margin-top: 20px;
        }
        @media (max-width:370px){
            padding: 20px;
        }
        .avatar-section{
            display: flex;
            align-items: center;
            .avatar{
                height: 80px;
                width: 80px;
                background-color: firebrick;
                overflow: hidden;
                border-radius: 50%;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .avatar-content{
                margin-left: 30px;
                h4{
                    font-weight: normal;
                    margin-top: 5px;
                }
                @media (max-width:370px){
                    h2{
                        font-size: 20px;
                    }
                }
            }
        }
        .testimonial-text{
            font-size: 20px;
            margin-top: 45px;
            line-height: 30px;
            color: #141414;
        @media (max-width:370px){
            font-size: 16px;
            line-height: 26px;
        }
        }
    }
}
`

export default TestimonialWrapper;