import styled from "styled-components";


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