import { Link } from "react-router-dom";
import styled from "styled-components";


export const MainNavbar = styled.section`
padding: 2px 0;
background-color: #121212;
position: sticky;
top: 0;
z-index: 99;
border-bottom: 1px solid white;
`

export const NavContainer = styled.div`
max-width: 1400px;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;
`

export const Logo = styled.div`
display: flex;
align-items: center;
justify-content: center;

a{
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    margin: 0 10px;
    font-family: 'Montserrat', sans-serif;

}

`

export const MobileIcon = styled.div`
display: none;


@media screen and (max-width:964px){
    display: block;
    
    font-size: 2.2rem;
    color: white;
    cursor: pointer;
    margin: 0 10px;
    
}
`

export const NavLinks = styled.div`
display: block;

@media screen and (max-width:964px){
    display: none;
}
`

export const Navol = styled.ol`
display: flex;
`

export const Item = styled.li`
height: 80px;
display: flex;
align-items: center;
justify-content: center;
margin: 0 0 0 15px;

`

export const NavLink = styled(Link)`
color: black;
text-decoration: none;
color: white;
font-family: 'Poppins', sans-serif;
transition: all 0.2s ease-in-out;

&:hover{
    color: #0E87FC ;    
}
`