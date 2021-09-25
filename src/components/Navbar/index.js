import React from 'react'
import { Link } from 'react-router-dom'
import {MainNavbar,NavContainer,Logo,NavLinks,Item,NavLink,Navol,MobileIcon} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <MainNavbar>
                <NavContainer>
                    <Logo>
                        <Link to='/'>FMOVIES</Link>
                    </Logo>

                    
                    <MobileIcon onClick={toggle}>
                        <i class='bx bx-menu'></i>
                    </MobileIcon>


                    <NavLinks> 
                        <Navol>

                        <Item>
                            <NavLink to='/movies'>
                                Movies
                            </NavLink>
                        </Item>

                        <Item>
                            <NavLink to='/series'>
                                Series
                            </NavLink>
                        </Item>

                        <Item>
                            <NavLink to='/categories'>
                                Categories
                            </NavLink>
                        </Item>

                        <Item>
                            <NavLink to='/search'>
                                Search
                            </NavLink>
                        </Item>

                        </Navol>
                    </NavLinks>

                </NavContainer>
            </MainNavbar>
            
        </>
    )
}

export default Navbar
