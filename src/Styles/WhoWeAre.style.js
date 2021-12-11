import styled from "styled-components";
import {primaryColor} from "../Assets/Utility"


export const WhoWrapper = styled.div`
padding: 50px;
display: flex;
overflow: hidden;
position: relative;
flex-direction: column;
align-items: center;
justify-content: center;
    @media (max-width:600px){
        padding:30px 20px;
    }

.who-heading{
    width: 65%;
    text-align: center;
    color: #012525;
    span{
        color: ${primaryColor};
    }
    @media (max-width:600px){
        font-size: 1.2rem;
        width: 100%;
    }
    @media (max-width:360px){
        font-size: 1.1rem;
    }
}

.arrow{
    position: absolute;
    width: 200px;
    margin-left: 200px;
    display: unset;
    @media (max-width:600px){
        display: none;
    }
}
.arrow-mobile{
    display: none;
    @media (max-width:600px){
        position: absolute;
        display: unset;
        left: 20px;
        top: 220px;
    }
    @media (max-width:380px){
        left: 20px;
        top: 205px;
    }
}
`

export const WhoSection = styled.div`
display: flex;
flex-direction: row;
margin-top:50px;
    @media (max-width:600px){
        flex-direction: column-reverse;
        margin-top: 30px;
    }
.why-section-container{
    position: relative;
}
.who-section-img{
    width: 500px;
    @media (max-width:600px){
        width: 400px;
        margin-left:-80px;
        margin-top:30px;
    }
}
.who-text{
    font-size: 20px;
    line-height: 32px;
    margin-top: 220px;
    margin-left: 95px;
    width: 420px;
    @media (max-width:600px){
        font-size: 17px;
        width: 80%;
        margin-top: 60px;
        margin-left: 20%;
        line-height: 24px;
    }
}


`