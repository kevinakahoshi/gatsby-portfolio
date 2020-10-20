import React, {
  useState
} from 'react';


const useMenu = () => {
  const [open, setOpen] = useState(false);
  const [sliding, setSliding] = useState(false);

  return {
    open,
    setOpen,
    sliding,
    setSliding
  };
};

export default useMenu;
