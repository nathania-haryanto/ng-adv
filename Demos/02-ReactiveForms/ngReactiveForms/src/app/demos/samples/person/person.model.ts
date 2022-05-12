export class Person {
  id: number;
  age: number;
  name: string;
  wealth?: string;
  state?: WorkLifeBalance;
  lastname?: string;
  gender: string;
  married?: boolean;
  imgUrl?: string;
  email?: string;
  address?: Address;
}

export enum WorkLifeBalance {
  Happy,
  Unsatisfied,
  ReadyForRevolution,
}

export class Address {
  street: string;
  city: string;
  postalCode: string;
}
