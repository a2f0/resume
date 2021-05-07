import React, {useRef, useEffect, ReactNode} from 'react';
import {useDetectOutsideClick} from '../../library/useDetectOutsideClick';
import {MenuContainer} from './MenuContainer';
import {MenuButton} from './MenuButton';
import {Menu} from './MenuItems';
import {DropdownMenuProvider} from './DropdownMenuContext';
import {useMenuParent} from './MenuParentContext';

interface MenuProps {
  children: ReactNode;
  label: string;
}

export default function DropdownMenu({children, label}: MenuProps) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const parentContext = useMenuParent();
  const onClick = () => {
    const newIsActive = !isActive;
    setIsActive(newIsActive);
    parentContext.setIsActive(newIsActive);
    parentContext.setActiveDropdown(label);
  };

  const onMouseEnter = () => {
    if (parentContext.isActive === true) {
      setIsActive(true);
      parentContext.setActiveDropdown(label);
    }
  };

  useEffect(() => {
    if (parentContext.activeDropdown !== label) {
      setIsActive(false);
    }
  }, [parentContext.activeDropdown]);

  return (
    <DropdownMenuProvider setIsActive={setIsActive}>
      <MenuContainer>
        <MenuButton onClick={onClick} onMouseEnter={onMouseEnter}>
          {label}
        </MenuButton>
        <Menu ref={dropdownRef} isActive={isActive}>
          {children}
        </Menu>
      </MenuContainer>
    </DropdownMenuProvider>
  );
}
