import styled from "styled-components"
import Assets from "../../assets"


const CustomCard = styled.div`
    width: 30vw;
    height: 60vh;
    background-color: ${Assets.Colors.branco};

    border-radius: 9px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title{
        color:${Assets.Colors.black};
        font-size: 24pt;
        text-align: center;
        margin: 5px;
    }
    .btn{
        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
        margin: 0 auto;
        border:none;
        width:35%;
        height: 10%;
        border-radius: 9px;

        background-color: ${Assets.Colors.black};
        color: ${Assets.Colors.branco};
        font-size: 12pt;
        transition:  .2s;

    }
    .btn:hover{
        width:40%;
        height: 15%;
        border-radius: 20px;
        cursor: pointer;
        transition:  .2s;
        background-color: ${Assets.Colors.amarelo};
        color: ${Assets.Colors.black};

    }

`

export default function Card(props) {return(<>
    <CustomCard>
        <h2 className="title">{props.name}</h2>
        <button className="btn">Solicitar orçamento</button>
    </CustomCard>
</>)}