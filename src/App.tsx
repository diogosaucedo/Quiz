import React from 'react';
import GlobalStyle from './styles/GlobalStyles';

import Form from './components/Form';
import Question from './components/Question';
import questions from './configs/questions';
import Button from './components/Button';
import Result from './components/Result';

function App() {
  type AnswersType = {
    [p: string]: string;
  };

  type IndexAnswerType = keyof AnswersType;

  const initialStateAnswers: AnswersType = {
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  };

  const [answers, setAnswers] = React.useState(initialStateAnswers);
  const [slide, setSlide] = React.useState(0);
  const [result, setResult] = React.useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setAnswers({ ...answers, [e.currentTarget.id]: e.currentTarget.value });
  };

  const finalResult = (): void => {
    const correct = questions.filter(({ id, answer }) => {
      const index: IndexAnswerType = id;
      return answer === answers[index];
    });

    setResult(`Você acertou: ${correct.length} de ${questions.length}`);
  };

  const handleClick = () => {
    if (slide < questions.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      finalResult();
    }
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Form onSubmit={handleSubmit}>
          <>
            {questions.map((question, index) => (
              <Question
                question={question.question}
                options={question.options}
                active={slide === index}
                key={question.id}
                id={question.id}
                value={answers[question.id]}
                onChange={handleChange}
              />
            ))}
          </>
          {result ? (
            <Result>{result}</Result>
          ) : (
            <Button onClick={handleClick}>Próxima</Button>
          )}
        </Form>
      </div>
    </>
  );
}

export default App;
