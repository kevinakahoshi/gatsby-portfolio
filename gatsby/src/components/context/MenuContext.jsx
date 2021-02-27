import React, {
  createContext,
  useState
} from 'react';

const MenuContext = createContext([
  false,
  () => ({})
]);

export const MenuProvider = ({ children }) => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const menuContextValue = [
    openMobileNav,
    setOpenMobileNav,
  ];

  return (
    <MenuContext.Provider value={menuContextValue}>
      { children }
    </MenuContext.Provider>
  )
};

export default MenuContext;
