import React from 'react';
import * as Styles from './styles';
import LabelType from './type';

const Label = ({ children }: LabelType) => {
  return <Styles.Label>{children}</Styles.Label>;
};

export default Label;
