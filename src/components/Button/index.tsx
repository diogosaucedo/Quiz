import React from 'react';
import * as Styles from './styles';

type ButtonType = { children: JSX.Element | string; onClick: () => void };

const Button = ({ children, onClick }: ButtonType) => {
  return <Styles.Button onClick={onClick}>{children}</Styles.Button>;
};

export default Button;
