function greet(name: string): string {
  return `Hola, ${name}!`;
}
console.log(greet("Martin"));

const getUsername = (user: string): string => {
  return `El usuario es: ${user}`;
};
console.log(getUsername("martin"));

// Función sin tipado
function getUser() {
  return {
    uid: "ABC123",
    username: "martin",
  };
}

const user = getUser();
console.log(user);

// Función con tipado
const getUser2 = (): { uid: string; username: string } => {
  return {
    uid: "ABC123",
    username: "martin",
  };
};
const user2 = getUser2();
console.log(user2);

// Función de flecha con return implícito ()
const getUser3 = () => ({
  uid: "ABC123",
  username: "martin",
});
const user3 = getUser3();
console.log(user3);

// Función de flecha (simplificada)
const greeting = (name: string) => `Hola, ${name}`;
console.log(greeting("Martin"));

interface User {
  uid: string;
  username: string;
  age?: number; // Propiedad opcional
}

function getUser4(): User {
  return {
    uid: "ABC123",
    username: "martin",
  };
}
const user4 = getUser4();
console.log(user4);

// Función de flecha de tipo callback
const myNumbers: number[] = [1, 2, 3, 4, 5];
myNumbers.forEach((value) => {
  console.log(value);
});
