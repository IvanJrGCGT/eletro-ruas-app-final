import styled from "styled-components"
import Assets from "../../assets"

const CustomSlide = styled.div`
    width: 80vw;
    height: 80%;
    background-color: ${Assets.Colors.branco};
    margin: 0 auto;
    border-radius: 9px;
    .img{
        width: 80vw;
        height: 80vh;
    }


`

export default function Slide() {return(<>
    <CustomSlide>
        <div className="slide">
            <div className="img"></div>
        </div>
    </CustomSlide>

</>)}