import styled from "styled-components";


export const CardMain = styled.section`
padding: 10px 0;
background: #121212;

`

export const CardContainer = styled.div`
max-width: 1400px;
margin: 0 auto;
padding: 0 15px;

`

export const Title = styled.h2`
font-size: 1.4rem;
color: white;
font-family: 'Montserrat',sans-serif;
text-align: center;
`

export const CardDiv = styled.div`
display: grid;
grid-template-columns: repeat(5,1fr);
grid-gap: 15px;
margin-bottom: 24px;

@media screen and (max-width:964px){
    grid-template-columns: repeat(3,1fr);
    grid-gap: 15px;
}

@media screen and (max-width:640px){
    grid-template-columns: repeat(2,1fr);
    
}
`