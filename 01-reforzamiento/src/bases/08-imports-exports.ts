import { heroes, type Hero } from "../data/heroes.data"


const getHeroeById = (id: number): Hero | undefined => {
    const hero = heroes.find((hero)=> {
       return hero.id === id;
    });

    // if (!hero) {
    //     throw new Error(`Hero with id ${id} not found`);
    // }

    return hero;
}

console.log(getHeroeById(1));