import styled from "styled-components";
import {secondaryColor } from "../Assets/Utility";


const ExploreWrapper = styled.div`
    background-color: ${secondaryColor};
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-content: center;
    padding: 100px 30px;
    color: white;
        @media (max-width:600px){
            padding: 20px;
            height:100vh;
            flex-direction: column;
        }
    .circle-big{
        position: absolute;
        top: 20px;
        width: 250px;
        left: 750px;
        @media (max-width:600px){
            display: none;
        }
    }
    .circle-small{
        position: absolute;
        top: 400px;
        width: 150px;
        left: 350px;
        @media (max-width:600px){
            display: none;
        }
    }
    .explore-container{
        width: 50%;
        @media (max-width:600px){
            width: 100%;
        }
        .explore-heading{
            font-size: 45px;
        @media (max-width:600px){
            font-size: 28px;
        }
        }
        .explore-text{
            font-size: 22px;
            width: 450px;
            color: lightgrey;
            line-height: 28px;
            margin-top: 20px;
        @media (max-width:600px){
            font-size: 16px;
            width: 98%;
        }
        }
        .explore-list{
            list-style: none;
            margin-top: 20px;
        }
        .explore-arrow{
            width: 170px;
            position: absolute;
            margin-top: 160px;
            margin-left: 80px;
        @media (max-width:600px){
            width: 90px;
            margin-top: 9%;
            margin-left: 10%;
        }
        @media (max-height:600px){
            display: none;
        }
        @media (max-height:830px){
            margin-top: 20%;
        }
        @media (max-height:740px){
            margin-top: 4%;
        }

        }
    }
`

export default ExploreWrapper;