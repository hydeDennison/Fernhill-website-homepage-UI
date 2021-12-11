import styled from "styled-components";
import { primaryColor } from "../Assets/Utility"

const ReachOutWrapper = styled.div`
display: flex;
position: relative;
background-color: ${primaryColor};
padding: 70px;
padding-bottom: 120px;
     @media (max-width:600px){
         padding: 30px;
     }
.reachout-img{
    position: absolute;
    width: 570px;
    left: 650px;
    top: -50px;
    @media (max-width:600px){
        display: none;
    }
}

.reachout-content{
    width: 500px;
        @media (max-width:600px){
            width: 100%;
        }
    .reachout-heading{
        font-size: 32px;
        @media (max-width:600px){
            font-size: 24px;
        }

         @media (max-width:370px){
             font-size: 24px;
        }
    }
    .reachout-btn{
        margin-top: 30px;
    }
}

`

export default ReachOutWrapper;