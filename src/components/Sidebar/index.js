import React from 'react'
import {SideBarContainer,Icon,SideWrapper,SidebarMenu,SidebarLink} from './SidebarElements'

const Sidebar = ({toggle,isOpen}) => {
    return (
        <>
            <SideBarContainer isOpen={isOpen}>
                <Icon onClick={toggle}>
                   <i class='bx bx-x'></i>
                </Icon>

                <SideWrapper >
                    <SidebarMenu>
                        <SidebarLink onClick={toggle} to='/movies'>Movies</SidebarLink>

                        <SidebarLink onClick={toggle} to='/series'>Series</SidebarLink>

                        <SidebarLink onClick={toggle} to='/categories'>Categories</SidebarLink>

                        <SidebarLink onClick={toggle} to='/search'>Search</SidebarLink>
                    </SidebarMenu>
                </SideWrapper>

            </SideBarContainer>
        </>
    )
}

export default Sidebar
