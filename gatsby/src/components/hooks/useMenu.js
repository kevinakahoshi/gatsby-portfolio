import React, {
  useContext,
  useState
} from 'react';
import MenuContext from '../context/MenuContext';

const useMenu = () => {
  const [openMobileNav, setOpenMobileNav] = useContext(MenuContext);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClose = () => setOpenMobileNav(() => false);

  const handleHideOverlay = () => setShowOverlay(() => false);

  const handleShowOverlay = () => setShowOverlay(() => true);

  const handleOpen = () => {
    setOpenMobileNav(() => true);
    handleShowOverlay();
  };

  return {
    openMobileNav,
    showOverlay,
    handleClose,
    handleOpen,
    handleHideOverlay,
    handleShowOverlay
  };
};

export default useMenu;
