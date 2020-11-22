import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.ul`
  height: 100vh;
  width: 200px;
  background-color: white;
  font-size: 1rem;
  padding: 4rem 0;
  border-right: 1px solid rgb(236, 236, 236);
  position: sticky;
  height: 100vh;
  top: 0;
`;
const Item = styled.li`
  color: rgb(121, 120, 140);
  .selected {
    background-color: rgb(225, 245, 255);
    border-right: 3px solid rgb(53, 129, 255);
    color: rgb(53, 129, 255);
  }
`;
const SubSection = styled.ul`
  font-size: 0.8rem;
`;
const SubItem = styled.li`
  color: rgb(121, 120, 140);
  .selected {
    background-color: rgb(225, 245, 255);
    border-right: 3px solid rgb(53, 129, 255);
    color: rgb(53, 129, 255);
  }
`;
const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 0.8rem 0 0.8rem 3rem;
`;
const StyledSubNavLink = styled(NavLink)`
  display: block;
  padding: 0.8rem 0 0.8rem 3rem;
  padding-left: 4rem;
`;

export interface MenuProps {}

const Menu: React.SFC<MenuProps> = () => {
  return (
    <nav>
      <Nav>
        <Item>
          <StyledNavLink to="/" exact activeClassName="selected">
            Strona Główna
          </StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to="/favorites" activeClassName="selected">
            Wybrane komentarze
          </StyledNavLink>
          <SubSection>
            <SubItem>
              <StyledSubNavLink to="/add-comment" activeClassName="selected">
                Dodaj komentarz
              </StyledSubNavLink>
            </SubItem>
          </SubSection>
        </Item>

        <Item>
          <StyledNavLink to="/filter" activeClassName="selected">
            Filtr
          </StyledNavLink>
        </Item>
      </Nav>
    </nav>
  );
};

export default Menu;
