import { useEffect, useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

interface Props {
  id: number;
}

export const usePokemon = ({ id }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const [loading, setLoading] = useState(false);

  const fetchPokemon = async (id: number) => {
    setLoading(true);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setLoading(false);

    setPokemon({
      id: data.id,
      name: data.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPokemon(id);
  }, [id]);

  return {
    // Properties
    pokemon,
    loading,

    // Methods
    fetchPokemon,
  };
};
