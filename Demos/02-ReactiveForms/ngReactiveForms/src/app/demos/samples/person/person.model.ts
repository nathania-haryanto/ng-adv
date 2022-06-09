export class Person {
  id: number = 0;
  age: number = 0;
  name: string = '';
  gender: string = '';
  wealth?: string;
  state?: WorkLifeBalance;
  lastname?: string;
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
  street: string = '';
  city: string = '';
  postalCode: string = '';
}
