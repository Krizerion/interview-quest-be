export interface Question {
  id: string;
  difficulty: string;
  field: string;
  category: string;
  text: string;
  answer: string;
  links: string[];
  notes: string;
}
