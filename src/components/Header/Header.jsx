import styled from "styled-components";
import logo from  "../../assets/img/logo.png";
import work from  "../../assets/img/work.png";


import Colors from '../../assets/Colors';


const CustomHeader = styled.div`
    .root{
        display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    width: 100vw;
    height: 25vh;

    color: ${Colors.branco};
    background:linear-gradient(  to bottom, #152023 0%,  #15202300 100%);
    transition: all 2s ;

    margin: 0;
    padding: 0;
    }
    .logo{
   /*      background: url(${logo});
        background-size: contain;
        width: 100px;
        height: 100px; */
    }
    .menu{
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
        justify-content: space-around;
    }
    .strong{
        font-size:24pt;
        font-weight: 1000;
    }
    .title{
        color: ${Colors.amarelo};
        font-size: 24pt;
    }
    .btn{
        width: 5vw;
        height: 5vh;
        background-color: #ffffff20;
        margin: 5px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        border-radius: 9px;
        transition: all .3s;

    }
    .btn:hover{
        width: 6vw;
        height: 6vh;
        background-color: #ffffff40;
        border-radius: 9px 0 9px 0;
        transition: all   .3s;
        cursor: pointer;

    }
    div{
        margin-top: 55px;
        display: flex;
    }
    .white{
        color: #FFF;
    }


`;

export default function Header() {return(<>
<CustomHeader>
            <div className="root">
            <div className='logo'>
                <p className="strong">Eletro</p>
                <p className="title">Ruas</p>

                </div>
                <nav className="menu">
                    <div className="btn">Inicio</div>
                    <div className="btn">Sobre</div>
                    <div className="btn">Contato</div>
                </nav>
            
            </div>
            </CustomHeader></>)}