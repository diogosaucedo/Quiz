import React from 'react';

import Fieldset from '../Fieldset';
import Legend from '../Legend';
import Label from '../Label';
import Input from '../Input';
import QuestionType from './type';

const Question = ({
  question,
  options,
  value,
  id,
  active,
  onChange,
}: QuestionType) => {
  if (!active) return null;

  return (
    <Fieldset>
      <Legend>{question}</Legend>
      <>
        {options.map((option) => (
          <Label key={option}>
            <Input
              type="radio"
              id={id}
              checked={option === value}
              value={option}
              onChange={onChange}
            />
            {option}
          </Label>
        ))}
      </>
    </Fieldset>
  );
};

export default Question;
