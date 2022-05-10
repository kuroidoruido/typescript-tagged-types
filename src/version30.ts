interface Person {
  id: PersonId;
  firstname: string;
  lastname: string;
  age: number;
  salary: Dollar | Euro;
}

type PersonId = { value: string; readonly __tag: unique symbol };
function newPersonId(id: string): PersonId {
  return id as unknown as PersonId;
}

type Dollar = { value: number; readonly __tag: unique symbol };
function newDollar(dollar: number): Dollar {
  return dollar as unknown as Dollar;
}
type Euro = { value: number; readonly __tag: unique symbol };
function newEuro(euro: number): Euro {
  return euro as unknown as Euro;
}

const johnDoe: Person = {
  id: newPersonId('001'),
  firstname: 'John',
  lastname: 'Doe',
  age: 20,
  salary: newDollar(2000),
};

const janeDoe: Person = {
  id: newPersonId('002'),
  firstname: 'Jane',
  lastname: 'Doe',
  age: 19,
  salary: newEuro(2500),
};

const salarySum = johnDoe.salary + janeDoe.salary;
