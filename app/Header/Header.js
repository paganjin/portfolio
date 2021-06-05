import React from 'react';
import styled from 'styled-components';
import Flex from '../../components/Flex';
import NavbarItem from './components/NavbarItem';

const HighLight = styled.span`
    color: #377e9a;
`;

const Logo = styled.div`
    font_size: 1.5rem;
    font-weight: 500;
`;

const Nav = styled(Flex)`
    padding: 15px 0;
    align-items: center;
`;

const Left = styled.div` 
    flex: 1;
`;

const Right = styled.div`
`;

const Header = () => (
    <Nav>
        <Left>
            <Logo className="logo">
                <HighLight>Tifa</HighLight>
                Lockhart 
            </Logo>
        </Left>
        <Right>
            <Flex>
                <NavbarItem href="HOME">Home</NavbarItem>
                <NavbarItem href="RESUME">Resume</NavbarItem>
                <NavbarItem href="SERVICES">Services</NavbarItem>
                <NavbarItem href="BLOG">Blog</NavbarItem>
                <NavbarItem href="CONTACT">Contact</NavbarItem>
            </Flex>
        </Right>
    </Nav>
);

export default Header;