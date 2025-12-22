// Array destructuring

// Creo un array de strings con los nombres de personajes
const characterNames: string[] = ['Goku', 'Vegeta', 'Trunks'];

// Desestructuro el array para asignar cada nombre a una variable
const [goku, vegeta, trunks] = characterNames;
console.log({ goku, vegeta, trunks });

// Si quiero omitir un elemento, uso una coma adicional
const [, , p3] = characterNames;
console.log({ p3 });

// Creo una función que retorna un array con dos elementos de diferente tipo
const returnsArrayFn = () => {
    return ['ABC', 123] as const; // Uso 'as const' para que los tipos sean literales
}

// Desestructuro el array retornado por la función
const [letters, numbers] = returnsArrayFn();

// Imprimo las variables desestructuradas
console.log({ letters, numbers });