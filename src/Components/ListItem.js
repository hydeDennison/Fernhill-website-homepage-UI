import ExploreArrow from "../Assets/Explore-arrow.png";
import styled from "styled-components";
import { primaryColor } from "../Assets/Utility";

function ListItem({ text }) {
    return (
           <Item>
                <img src={ExploreArrow} alt="" />
                <h3>{text}</h3>
            </Item>
    )
}



const Item = styled.li`
    display: flex;
    align-items: center;
    img{
        width: 40px;
    }
    h3{
    margin-left: 20px;
    font-size: 16px;
    color: ${primaryColor};
    text-transform:capitalize;
    }

`




export default ListItem;