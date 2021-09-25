import styled from "styled-components";


export const Main = styled.div`
width: 100%;
height: 350px;
margin: 15px 0;

`

export const Content = styled.div`
width: 250px;
height: 100%;
cursor: pointer;
position: relative;
overflow: hidden;
margin: 5px 10px;

&:hover img{
    transform: scale(1.2);
}
`

export const Image = styled.img`
width: 100%;
height: 100%;
transition: all 0.25s ease-in-out;
position: absolute;
`

export const Overlay = styled.div`
width: 100%;
height: 100%;
position: absolute;
opacity: 0;
backdrop-filter: blur(8px);
background: rgba(0,0,0,0.5);
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;



&:hover{
    opacity: 1;
}
`

export const Title = styled.h3`
color: white;
font-family: 'Poppins',sans-serif;
`

export const Rating = styled.h5`
color: white;
font-family: 'Poppins',sans-serif;
`
export const TitleMain = styled.h3`
color: white;
font-family: 'Poppins',sans-serif;
text-align: center;
`

export const Language = styled.h3`
color: white;
font-family: white;
`

