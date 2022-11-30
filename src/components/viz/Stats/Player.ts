export interface Player {
  person: Person;
  jerseyNumber: number;
  position: Postion;
}

export interface Person {
  id: number;
  fullName: string;
  link: string;
  primaryNumber: string;
  birthDate: string;
  birthCity: string;
  birthState: string;
  birthCountry: string;
  height: string;
  weight: string;
  shootsCatches: string;
}

interface Postion {
  code: string;
  name: string;
  type: string;
  abberviation: string;
}
