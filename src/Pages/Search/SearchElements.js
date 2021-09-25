import styled from "styled-components";


export const SearchContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;

`

export const Form = styled.form``

export const Input = styled.input`
width: 450px;
height: 40px;
outline: none;
border: 2px solid white;
padding: 5px;
background: transparent;
caret-color: white;

&::placeholder{
    font-family: 'Poppins',sans-serif;
    font-size: 0.9rem;
    font-weight: bold;
}

&:focus{
    color: white;
    font-size: 0.9rem;
    font-weight: bold;
    font-family: 'Poppins',sans-serif;
}
`



//////





export const CardMain = styled.section`
padding: 10px 0;
background: #242424;

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