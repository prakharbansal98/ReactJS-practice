import React, { useState } from "react";

const useDisclosure = () => {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(true);
  };

  const isClose = () => {
    setOpen(false);
  };

  return { open, isOpen, isClose };
};

export default useDisclosure;
