import React, {useRef} from 'react';
import {useDetectOutsideClick} from '../../library/useDetectOutsideClick';
import styled, {css} from 'styled-components';

const MenuContainer = styled.div`
position: relative,
display: flex,
justify-content: center,
align-items: center,
`;

const MenuButton = styled.button`
  background: #ffffff;
  border-radius: 90px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border: none;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  margin-left: auto; /* Strictly for positioning */
  &:hover {
    box-shadow: 0 10px 8px rgba(0, 0, 0, 0.3);
  }
  span {
    font-weight: 1000;
    vertical-align: middle;
    font-size: 14px;
    margin: 0 10px;
  }
`;

interface IProps {
  isActive?: boolean;
}

const Menu = styled.div<IProps>`
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  left: 0;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    border-bottom: 1px solid #dddddd;
  }
  li a {
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
  }
  ${({isActive}) =>
    isActive &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    `}
`;

// https://codesandbox.io/s/dropdown-menu-jzldk?file=/src/App.js:397-441
export default function DropdownMenu() {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="container">
      <MenuContainer>
        <MenuButton onClick={onClick}>
          <span>File</span>
        </MenuButton>
        <Menu ref={dropdownRef} isActive={isActive}>
          <ul>
            <li>
              <a href="#">Download PDF</a>
            </li>
            <li>
              <a href="#">Download SVG</a>
            </li>
          </ul>
        </Menu>
      </MenuContainer>
    </div>
  );
}
