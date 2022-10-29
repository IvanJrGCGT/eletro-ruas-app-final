import Assets from '../assets/index';
import Comps from '../components';

import styled from 'styled-components';

        {/* PAGINA 01 */}
const One = styled.div`
background: linear-gradient(#000 0%, #ffffff00 50%, #000 100%) ,url(${Assets.bg2});
background-size: 100%;
background-repeat: no-repeat;
width: 100vw;
height: 100vh;

`

        {/* PAGINA 02 */}
const Two = styled.div`
background: linear-gradient(#000 0%, #ffffff00 50%, #000 100%) ,url(${Assets.bg1});
background-size: 100%;
background-repeat: no-repeat;
width: 100vw;
height: 100vh;
margin: 0;
padding: 50px 30px;
display: flex;
flex-direction: row;
flex-wrap: wrap;

 `


export default function HomePage() 
{
    return(
    <> 
    
        {/* PAGINA 01 */}
        <One>
            <Comps.Header />
            <Comps.Slide />
        </One>

        
        {/* PAGINA 02 */}
        <Two>
        <Comps.Card  name="card 01" />
        <Comps.Card  name="card 02" />
        <Comps.Card  name="card 03" />

        </Two>
        <One>
         </One>

        {/* FOOTER */}
        <Comps.Footer />
 
    </>

)
}