import styled from "styled-components";
import { primaryColor } from "../Assets/Utility";

const CtaWrapper = styled.div`
    display: flex;
    flex-direction: row;
        @media (max-width:600px){
            flex-direction: column;
        }
    /* justify-content:center; */
    align-content:center;
    height: 90vh;
    overflow: hidden;
    background-color: ${primaryColor};
    .cta-container{
        position: relative;
        /* width: 50%; */
    }
    .cta-content{
        @media (max-width:600px){
            width: 90%;
            margin-top:100px;
        }
        @media (max-height:670px){
            width: 90%;
            margin-top:50px;
        }
        width: 550px;
        margin-left:20px;
        margin-top:200px;
    }
    .cta-content-heading{
        font-weight:900;
        @media (max-width:600px){
            font-size:30px;
            font-weight:900;
        }
        @media (max-width:360px){
            font-size:30px;
        }
        @media (max-height:670px){
            font-size:30px;
        }
        font-size:45px;

    }
    .cta-content-text{
        @media (max-width:600px){
            width: 90%;
            font-size: 20px;
        }
        @media (max-width:380px){
            width: 90%;
            font-size: 18px;
        }
        font-size: 22px;
        width: 450px;
        margin: 20px 0;
        margin-bottom:30px;
    }
    .cta-img{
        position: absolute;
        width: 800px;
        left: -100px;
        margin-top: -120px;
    }
`

export default CtaWrapper