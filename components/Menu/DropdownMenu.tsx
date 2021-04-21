import React, {useRef} from 'react';
import {useDetectOutsideClick} from '../../library/useDetectOutsideClick';
import {MenuContainer} from './MenuContainer';
import {MenuButton} from './MenuButton';
import {Menu} from './Menu';

interface MenuProps {
  label: string;
}

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
