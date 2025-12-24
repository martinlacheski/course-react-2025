import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { searchHeroesAction } from "@/heroes/actions/search-heros.action";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { HeroStats } from "@/heroes/components/HeroStats";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? undefined;
  const team = searchParams.get("team") ?? undefined;
  const category = searchParams.get("category") ?? undefined;
  const universe = searchParams.get("universe") ?? undefined;
  const status = searchParams.get("status") ?? undefined;
  const strength = searchParams.get("strength") ?? undefined;
  const sort = searchParams.get("sort") ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: [
      "search",
      { name, team, category, universe, status, strength, sort },
    ],
    queryFn: () =>
      searchHeroesAction({
        name,
        team,
        category,
        universe,
        status,
        strength,
        sort,
      }),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  return (
    <>
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        description="Descubre, explora y administra super héroes y villanos"
      />

      <CustomBreadcrumbs
        currentPage="Buscador de héroes"
        // breadcrumbs={[
        //   { label: 'Home1', to: '/' },
        //   { label: 'Home2', to: '/' },
        //   { label: 'Home3', to: '/' },
        // ]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControls />

      {/*  */}

      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
