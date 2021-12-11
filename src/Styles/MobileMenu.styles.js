import styled from "styled-components";

const MobileNav = styled.div`
width: 100%;
height: 100vh;
display: none;
position: fixed;
z-index: 195;
justify-content:center;
align-items: center;
background-color: #000000dc;
.close{
    position: absolute;
    margin-top:-80vh;
    margin-left: 245px;
    padding: 20px;
}
.mobile-nav-link-wrapper{
    display: flex;
    height: fit-content;
    flex-direction: column;
    align-items:center;
    a{
        font-size:2.2rem;
        margin-top: 10px;
        color: white;
    }
}
`

export default MobileNav;