import React, {
  useState
} from 'react';

// Components
import Hamburger from './Hamburger';
import NavDrawer from './NavDrawer';
import useMenu from '../hooks/useMenu';

const NavigationMobile = ({ offset, navigationItems }) => {
  const [open, setOpen] = useState(false);
  const [sliding, setSliding] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSlideOpen = () => setSliding(true);
  const handleSlideClose = () => setSliding(false);

  return (
    <>
      <Hamburger
        handleOpen={handleOpen}
      />
      <NavDrawer
        offset={offset}
        navigationItems={navigationItems}
        open={open}
        sliding={sliding}
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleSlideOpen={handleSlideOpen}
        handleSlideClose={handleClose}
      />
    </>
  )
}

export default NavigationMobile;
