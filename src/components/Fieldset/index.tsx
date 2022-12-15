import React from 'react';
import * as Styles from './styles';
import FieldsetType from './type';

const Fieldset = ({ children }: FieldsetType) => {
  return <Styles.Fieldset>{children}</Styles.Fieldset>;
};

export default Fieldset;
