import React, {useRef} from 'react';
import {useDetectOutsideClick} from '../../library/useDetectOutsideClick';
import styled, {css} from 'styled-components';
import {MenuButton} from './MenuButton';

const MenuContainer = styled.div`
position: relative,
display: flex,
justify-content: center,
align-items: center,
`;

interface IProps {
  isActive: boolean;
}

interface MenuProps {
  label: string;
}

const Menu = styled.div<IProps>`
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  // left: 0;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
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
export default function DropdownMenu(props: MenuProps) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <MenuContainer>
        <MenuButton onClick={onClick}>{props.label}</MenuButton>
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
