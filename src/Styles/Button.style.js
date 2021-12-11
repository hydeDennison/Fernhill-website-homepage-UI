import styled from "styled-components";

const ButtonWrapper = styled.div`
width: fit-content;
a{
    color: #ffffff;
    background-color: #000000;
    position: relative;
    padding: 18px 70px;
    font-size: 13px;
    text-align: center;
    overflow: hidden;

    z-index: 99;
    ::after{
     content: "";
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    position: absolute;
    left:0%;
    z-index: -1;
    top: 0;
    }

}

`
export default ButtonWrapper