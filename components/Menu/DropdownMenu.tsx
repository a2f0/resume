import React, {useRef, ReactNode} from 'react';
import {useDetectOutsideClick} from '../../library/useDetectOutsideClick';
import {MenuContainer} from './MenuContainer';
import {MenuButton} from './MenuButton';
import {Menu} from './Menu';
import {MenuProvider} from './MenuContext';

interface MenuProps {
  children: ReactNode;
  label: string;
}

// https://codesandbox.io/s/dropdown-menu-jzldk?file=/src/App.js:397-441
export default function DropdownMenu({children, label}: MenuProps) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <MenuContainer>
      <MenuButton onClick={onClick}>{label}</MenuButton>
      <MenuProvider setIsActive={setIsActive}>
        <Menu ref={dropdownRef} isActive={isActive}>
          {children}
        </Menu>
      </MenuProvider>
    </MenuContainer>
  );
}
