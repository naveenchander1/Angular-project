export interface Category {
  id: number;
  name: string;
}

export interface Quiz {
  amount: number;
  category: string;
  difficulty: string;
  type: string;
}

export interface Result {
  response_code: number;
  results: Array<Questions>;
}

export interface Questions {
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

export interface Answers extends Questions {
  options?: Array<option>;
  isCorrectAnswer?: boolean;
  selected?: string | null;
}

export interface option {
  label: string;
  value: string | number;
  isChecked: boolean;
}
