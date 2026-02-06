export interface Dog {
  slug: string;
  callName: string;
  registeredName: string;
  japaneseName?: string;
  sex: "Male" | "Female";
  dateOfBirth: string;
  color: string;
  breeder: string;
  sire: string;
  dam: string;
  titles: string[];
  healthTests: HealthTest[];
  bio: string;
  achievements: string[];
  featured?: boolean;
}

export interface HealthTest {
  name: string;
  result: string;
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
  dog: string;
  category: "breed-first" | "show" | "performance";
}

export interface ShowResult {
  date: string;
  show: string;
  dog: string;
  placement: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
