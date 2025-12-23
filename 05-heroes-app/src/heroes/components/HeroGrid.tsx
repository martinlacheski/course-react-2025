import { HeroGridCard, HERO_BADGE } from "./HeroGridCard";

export const HeroGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {/* Hero Card 1 - Superman */}
      <HeroGridCard
        hero="Superman"
        name="Clark Kent"
        type={HERO_BADGE.HERO}
        universe="DC"
        state="Active"
        image="/placeholder.svg?height=300&width=300"
        description="El hombre de acero, el defensor de la humanidad."
        strength={80}
        intelligence={90}
        speed={70}
        durability={95}
        powers={[
          "Volar",
          "Vision de calor",
          "Super fuerza",
          "Super velocidad",
          "Super respiración",
        ]}
        firstAppearance="1938"
      />

      {/* Hero Card 2 - Batman */}
      <HeroGridCard
        hero="Batman"
        name="Bruce Wayne"
        type={HERO_BADGE.HERO}
        universe="DC"
        state="Active"
        image="/placeholder.svg?height=300&width=300"
        description="El heroe de la noche, el defensor de ciudad Gótica."
        strength={80}
        intelligence={90}
        speed={70}
        durability={95}
        powers={["Inteligencia", "Artes marciales", "Destreza", "+2 más"]}
        firstAppearance="1939"
      />

      {/* Hero Card 3 - Wonder Woman */}
      <HeroGridCard
        hero="Wonder Woman"
        name="Diana Prince"
        type={HERO_BADGE.HERO}
        universe="DC"
        state="Active"
        image="/placeholder.svg?height=300&width=300"
        description="La princesa de las Amazonas, defensora de la humanidad."
        strength={80}
        intelligence={90}
        speed={70}
        durability={95}
        powers={["Volar", "Super fuerza", "+4 más"]}
        firstAppearance="1941"
      />

      {/* Hero Card 4 - Spider-Man */}
      <HeroGridCard
        hero="Spider-Man"
        name="Peter Parker"
        type={HERO_BADGE.HERO}
        universe="Marvel"
        state="Active"
        image="/placeholder.svg?height=300&width=300"
        description="El aracnido, protector de la ciudad de New York."
        strength={80}
        intelligence={90}
        speed={70}
        durability={95}
        powers={["Escalada", "Sentido arácnido", "+3 más"]}
        firstAppearance="1962"
      />

      {/* Hero Card 5 - Iron Man */}
      <HeroGridCard
        hero="Iron Man"
        name="Tony Stark"
        type={HERO_BADGE.HERO}
        universe="Marvel"
        state="Active"
        image="/placeholder.svg?height=300&width=300"
        description="El hombre de acero, multimillonario y genio."
        strength={80}
        intelligence={90}
        speed={70}
        durability={95}
        powers={["Armas", "Genio", "+3 más"]}
        firstAppearance="1963"
      />

      {/* Hero Card 6 - Deadpool */}
      <HeroGridCard
        hero="Deadpool"
        name="Wade Wilson"
        type={HERO_BADGE.ANTI_HERO}
        universe="Marvel"
        state="Active"
        image="/placeholder.svg?height=300&width=300"
        description="El mercenario bocón, un antihéroe impredecible con poderes curativos acelerados."
        strength={60}
        intelligence={80}
        speed={70}
        durability={95}
        powers={["Factor curativo", "Artes marciales", "+3 más"]}
        firstAppearance="1991"
      />
    </div>
  );
};
