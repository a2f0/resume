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

export default function DropdownMenu({children, label}: MenuProps) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => {
    setIsActive(!isActive);
  };

  const onMouseEnter = () => {
    console.info('onMouseEnter');
  };

  return (
    <MenuProvider setIsActive={setIsActive}>
      <MenuContainer>
        <MenuButton onClick={onClick} onMouseEnter={onMouseEnter}>
          {label}
        </MenuButton>
        <Menu ref={dropdownRef} isActive={isActive}>
          {children}
        </Menu>
      </MenuContainer>
    </MenuProvider>
  );
}
