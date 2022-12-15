import styled from 'styled-components';
import { black, white } from '../../configs/colors';
import FormType from './type';

const Form = styled.form<FormType>`
  // layout
  display: flex;
  flex-direction: column;
  align-items: center;

  // box model
  width: 48rem;
  padding: 0.8rem;

  // display
  background: ${black};
  font-family: 'Montserrat', sans-serif;
  color: ${white};
  border-radius: 0.8rem;
`;

export { Form };
