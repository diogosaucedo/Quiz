import React from 'react';
import * as Styles from './styles';
import InputType from './type';

const Input = ({ type, id, checked, value, onChange }: InputType) => {
  return (
    <Styles.Input
      type={type}
      id={id}
      checked={checked}
      value={value}
      onChange={onChange}
    ></Styles.Input>
  );
};

export default Input;
