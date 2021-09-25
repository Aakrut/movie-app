import styled from "styled-components";


export const CategoryMain = styled.div`
height: 60px;
width: 100%;
margin: 20px 0;
`

export const Button = styled.button`
padding: 10px;
margin: 0 5px;
width: fit-content;
color: white;
background-color: transparent;
border: 1px solid white;
cursor: pointer;

`

export const CategoryContainer = styled.div`
max-width: 1400px;
margin: 0 auto;

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

export const CardsContainer = styled.div`
width: 100%;
height: 350px;
position: relative;
overflow: hidden;

&:hover img{
    transform: scale(1.2);
}
`

export const Image = styled.img`
width: 100%;
height: 100%;
cursor: pointer;
position: absolute;
transition: all 0.25s ease-in-out;

`

export const OverLay = styled.div`
width: 100%;
height: 100%;
position: absolute;
opacity: 0;
background: rgba(0,0,0,0.6);
cursor: pointer;



&:hover{
    opacity: 1;
}

`

export const Title = styled.h3`
font-family: 'Poppins',sans-serif;
color: white;
position: absolute;
bottom: 0;
margin: 0 10px;
`

export const LI = styled.li`
list-style: none;
`