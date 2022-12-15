import React from 'react';
import ResultType from './type';
import * as Styles from './styles';

const Result = ({ children }: ResultType) => {
  return <Styles.Result>{children}</Styles.Result>;
};

export default Result;
