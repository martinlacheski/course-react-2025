const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
    rank: 'Avenger'
}

// const name = person.name;
// const age = person.age;
// const key = person.key;

// Destructuring
const { name, age, key } = person;
console.log({ name, age, key });

// Interface de Heroes 
interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string; // Propiedad opcional
}

const useContext = ({ name, age, key, rank }: Hero) => {
    return {
        keyName: key,
        user:{
            name,   // Mismo que name: name
            age     // Mismo que age: age
        },
        rank: rank,
    } 
}

const context = useContext(person);
console.log(context);