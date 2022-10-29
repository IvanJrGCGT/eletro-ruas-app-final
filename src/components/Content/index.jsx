import styled from "styled-components"
import work from  "../../assets/img/work.png";


const CustomContent = styled.div`
width:55vw;
height: 75vh;
background-color: #ffffff60;
margin: 55px 120px;
display: flex;
flex-direction: row;
border-radius: 9px 9px 9px 9px;
    .image{
        background: url(${work});
        background-size: cover;
        background-repeat: no-repeat;
        

        width: 60%;
        height: 80%;
    }
    .text{
        color: #000;
        width: 40%;
        height: 80%;
        text-align: center;
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }



`

export default function Content() {return(<>
    <CustomContent>
                <div className="image"></div>
                <div className="text">
                    <h2>Lorem ipsummer hits</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque in placeat minus pariatur delectus provident, reiciendis vero adipisci veritatis quidem. Autem ad nulla voluptatem nobis dolorem hic sed id!
                </div>
            </CustomContent>
</>)}