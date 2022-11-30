export interface Player {
  person: Person;
  jerseyNumber: number;
  position: Postion;
}

interface Person {
  id: number;
  fullName: string;
  link: string;
}

interface Postion {
  code: string;
  name: string;
  type: string;
  abberviation: string;
}
