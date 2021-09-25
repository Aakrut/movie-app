import styled from "styled-components";


export const HeroContainer = styled.div`
height: 100vh;
width: 100%;
object-fit: contain;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 0 20px 0;
`

export const Image = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
background-position: center;
background-size: cover;
background-blend-mode: color(rgba(0,0,0,0.3));
z-index: -1;
`

export const Content = styled.div`
max-width: 90%;
display: flex;
flex-direction: column;
`

export const Title = styled.h2`
margin-top:-100px ;
font-weight: bold;
font-family: 'Montserrat';
font-size: 1.4rem;
color: white;
`

export const Description = styled.p`
font-family: 'Poppins',sans-serif;
color: white;

`

export const ButtonsDiv = styled.div`
display: flex;
align-items: flex-start;

`

export const Buttons = styled.button`
padding: 1rem ;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
font-size: 1rem;
margin-right:10px;
cursor: pointer;
transition: all 0.25s ease-in-out;
border: 1px solid white;

background: ${props => props.primary ? 'white' : 'transparent'};

color: ${props => props.primary ? 'black' : 'white'};





i{
    margin: 0 0 0 10px;

}
&:hover{
    transform: translate(0,10%);
}
`

export const Li = styled.li`
list-style: none;
`