type QuestionType = {
  question: string;
  options: string[];
  value: string;
  id: string;
  active: boolean;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

export default QuestionType;
