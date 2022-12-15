import React from 'react';

type ButtonType = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default ButtonType;
