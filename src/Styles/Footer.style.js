import styled from "styled-components";

const FooterWrapper = styled.div`
padding: 40px;
padding-top: 150px;
display: flex;
overflow: hidden;
flex-direction: column;
   @media (max-width:600px){
       padding: 50px 10px;
       padding-bottom: 10px;
   }

.links-wrapper{
    display: flex;
    align-self: center;
        svg{
            display: none;
        }
    .link-container{
        text-align: center;
        a{
            font-size: 45px;
            margin-left: 25px;
        @media (max-width:600px){
            font-size: 28px;
            margin-left: 10px;
        }
        @media (max-width:360px){
            font-size: 24px;;
        }
        }
    }
}
.footer-contact-links{
    margin-top: 30px;
    display: flex;
    padding: 20px;
    padding-bottom: 10px;
    justify-content: space-between;
        @media (max-width:600px){
            padding: 0;
            flex-direction: column-reverse;
            align-content: center;
            justify-items: center;
            .footer-copyright{
                text-align:center;
            }
        }
    .footer-contact{
        @media (max-width:600px){
            display: flex;
            margin-bottom: 20px;
            justify-content: center;
        }
        a{
            margin-left: 20px;
            font-size: 18px;
            text-transform: none;
        @media (max-width:600px){
            font-size: 18px;
            margin-left: 10px;
        }

        @media (max-width:390px){
            font-size: 16px;
            margin-left: 10px;
        }
        }
    }
}
`

export default FooterWrapper;