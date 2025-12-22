export interface Hero{
    id: number;
    name: string;
    owner: Owner;
}

// type Owner = 'DC' | 'Marvel';

enum Owner {
    DC = 'DC',  
    Marvel = 'Marvel',
}


export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    // owner: 'DC',
    owner: Owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    // owner: 'Marvel',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    // owner: 'DC',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    // owner: 'DC',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    // owner: 'Marvel',
    owner: Owner.Marvel,
  },
  {
    id: 6,
    name: 'Thor',
    // owner: 'Marvel',
    owner: Owner.Marvel,
  }
];

console.log(heroes);


interface Person{
    nombre: string;
    apellido: string;
    edad: number;
    sexo: Sex;
}

type Sex = 'Hombre' | 'Mujer' | 'Indefinido';

const persona: Person = {
    nombre: 'Martin',
    apellido: 'Lacheski',
    edad: 40,
    sexo: 'Hombre'
};

console.log(persona);