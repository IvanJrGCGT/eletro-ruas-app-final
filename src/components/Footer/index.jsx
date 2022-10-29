import styled from "styled-components"
import Assets from "../../assets"

const CustomFooter = styled.div`

    width: 100vw;
    height: 15vh;
    background-color: ${Assets.Colors.black};
    .logo{
        background: url(${Assets.logo});
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        margin-left: 50px;
    }
`


export default function Footer() {return(<>
<CustomFooter>
    <div className="logo"></div>

</CustomFooter>
</>)}