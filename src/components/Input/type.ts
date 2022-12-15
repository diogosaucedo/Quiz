type InputType = {
  type: string;
  id?: string;
  checked?: boolean;
  value?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
};

export default InputType;
