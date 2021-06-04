import React, {ReactNode, useEffect, useRef} from 'react';
import {DropdownMenuProvider} from './DropdownMenuContext';
import {MenuButton} from './MenuButton';
import {MenuContainer} from './MenuContainer';
import {MenuItems} from './MenuItems';
import {useDetectOutsideClick} from '../../library/useDetectOutsideClick';
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
        <MenuButton
          id={'menuButton' + label}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
        >
          {label}
        </MenuButton>
        <MenuItems
          id={'menuItems' + label}
          ref={dropdownRef}
          isActive={isActive}
        >
          {children}
        </MenuItems>
      </MenuContainer>
    </DropdownMenuProvider>
  );
}
