import React from 'react';
import * as Styles from './styles';
import FormType from './type';

const Form = ({ children, onSubmit }: FormType) => {
  return <Styles.Form onSubmit={onSubmit}>{children}</Styles.Form>;
};

export default Form;
