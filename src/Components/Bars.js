import styled from "styled-components";
import { primaryColor, secondaryColor } from "../Assets/Utility";



export function BarSmall(){
    return (
        <SmallBar>
            <div className="line"></div>
            <h3>2x</h3>
        </SmallBar>
    )
}

const SmallBar = styled.div`
    width: 200px;
    height: 40%;
    position: absolute;
    bottom: 0;
    content: "";
    background-color: #044646;
    padding-left: 20px;
    border-radius: 40px 40px 0 0;
    display: flex;
        @media (max-width:360px){
            height:15%;
            border-radius: 10px 10px 0 0;
        }
        @media (max-width:600px){
            height: 25%;
            width: 30%;
            border-radius: 30px 30px 0 0;
        }

        @media (max-width:370px){
            height:20%;
        }
    .line{
        width: 1.5px;
        content: " ";
        background-color: ${primaryColor};
        height: 70%;
        align-self: flex-end;
    }
    h3{
        align-self: center;
        @media (max-width:600px){
            margin-top:-60%;
        }
        margin-left:20px;
    }

`


// Big bar


export function BarLarge(){
    return (
        <BigBar>
            <div className="line"></div>
            <h3>4x</h3>
        </BigBar>
    )
}


const BigBar = styled(SmallBar)`
height: 60%;
margin-left: 260px;
background-color: #F0AFC5;
        @media (max-width:600px){
            height:37%;
            margin-left:170px;
        }
        @media (max-width:370px){
            height:30%;
        }
color: ${secondaryColor};
.line{
    background-color: ${secondaryColor};
}

`