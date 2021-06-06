import React from 'react';
import styled from 'styled-components';
import Flex from '../../components/Flex';
import './Header.css';

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

const Header = ({
  page,
}) => {
  const navbarItem = [
  { key: 'HOME', value: 'Home' },
  { key: 'RESUME', value: 'Resume' },
  { key: 'SERVICES', value: 'Services' },
  { key: 'BLOG', value: 'Blog' },
  { key: 'CONTACT', value: 'Contact' }
  ];
  return (
    <Nav>
      <Left>
        <Logo className="logo">
          <HighLight>Tifa</HighLight>
          Lockhart
        </Logo>
      </Left>
      <Right>
        <Flex>
          {navbarItem.map((navbarItem) => (
            <a
              key={navbarItem.key}
              className={`navbarItem ${page === navbarItem.key && 'navbarItem--active'}`}
              href={navbarItem.value}
            >
              {navbarItem.value}
            </a>
          ))}
        </Flex>
      </Right>
    </Nav>
  );
}

export default Header;