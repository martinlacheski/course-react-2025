interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  street: string;
  number: number;
}

const person: Person = {
  firstName: "Martin",
  lastName: "Lacheski",
  age: 40,
  address: {
    street: "Calle falsa",
    number: 123,
  },
};

console.log(person);

// const person2 = structuredClone(person);

// person2.firstName = 'Juan';
// person2.lastName = 'Perez';
// person2.age = 30;
// person2.address.street = 'Otra calle';
// person2.address.number = 456;

// console.log(person, person2);

const martin: Person = {
  firstName: "",
  lastName: "",
  age: 0,
  address: {
    street: "",
    number: 0,
  },
};

console.log(martin);
