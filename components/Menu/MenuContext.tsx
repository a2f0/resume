import React, {ReactNode} from 'react';

const MenuContext = React.createContext<ContextProps | undefined>(undefined);

interface ContextProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuProps {
  children: ReactNode;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuProvider({children, setIsActive}: MenuProps) {
  return (
    <MenuContext.Provider value={{setIsActive: setIsActive}}>
      {children}
    </MenuContext.Provider>
  );
}

function useMenu() {
  const context = React.useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}

export {MenuProvider, useMenu};
