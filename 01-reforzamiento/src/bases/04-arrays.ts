const myArray: number[] = [1,2,3,4,5];
const myArray2: (number|string)[] = [1,2,3,4,5,'Nombre'];
const myArray3: string[] = ['Martin','Lacheski'];
const myArrayCopy = [...myArray, 6,7,8,9,10];
console.log({myArray,myArray2,myArray3,myArrayCopy});