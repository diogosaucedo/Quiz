import React from 'react';
import * as Styles from './styles';
import LegendType from './type';

const Legend = ({ children }: LegendType) => {
  return <Styles.Legend>{children}</Styles.Legend>;
};

export default Legend;
