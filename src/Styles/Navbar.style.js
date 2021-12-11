import styled from "styled-components";
import { primaryColor } from "../Assets/Utility";

const NavWrapper = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: ${primaryColor};
    padding: 20px;
    svg{
        width: 200px;
        @media (max-width:600px){
            width: 150px;
        }
    }
    .nav-links{
        display: flex;
        flex-direction: row;
        @media (max-width:600px){
            display: none;
        }
        a{
            padding: 10px;
            font-size: 1.4rem;
        }
    }
    .hamburger-button{
        background-color: transparent;
        padding: 10px;
        display: none;
        @media (max-width:600px){
            display: unset;
        }
        border: none;
    }
`
export default NavWrapper;