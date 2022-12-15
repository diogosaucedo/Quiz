import styled from 'styled-components';
import { primaryColor, white } from '../../configs/colors';
import ButtonType from './type';

const Button = styled.button<ButtonType>`
  // box model
  width: 8rem;
  height: 4rem;

  // display
  background: ${primaryColor};
  color: ${white};
  border: none;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
`;

export { Button };
