import { use, useMemo } from "react";
import { useSearchParams } from "react-router";

import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { HeroStats } from "@/heroes/components/HeroStats";

import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext";
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";

export const HomePage = () => {
  // useSearchParams para obtener los parámetros de la URL
  const [searchParams, setSearchParams] = useSearchParams();

  // useFavoriteHeroContext para obtener los datos de los favoritos
  const { favoriteCount, favorites } = use(FavoriteHeroContext);

  // datos de los parámetros de la URL
  const activeTab = searchParams.get("tab") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";
  const category = searchParams.get("category") ?? "all";

  // useMemo para obtener el tab seleccionado
  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  /* useQuery para obtener los datos de los personajes y la summary 
  mediante la implementación de hooks: usePaginatedHero y useHeroSummary */
  const { data: heroesResponse } = usePaginatedHero(+page, +limit, category);
  const { data: summary } = useHeroSummary();

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de Superhéroes"
          description="Descubre, explora y administra superhéroes y villanos"
        />

        <CustomBreadcrumbs currentPage="Superhéroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "all");
                  prev.set("category", "all");
                  prev.set("page", "1");
                  return prev;
                })
              }
            >
              Todos ({summary?.totalHeroes})
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "favorites");
                  return prev;
                })
              }
            >
              Favoritos ({favoriteCount})
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "heroes");
                  prev.set("category", "hero");
                  prev.set("page", "1");
                  return prev;
                })
              }
            >
              Heroes ({summary?.heroCount})
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "villains");
                  prev.set("category", "villain");
                  prev.set("page", "1");
                  return prev;
                })
              }
            >
              Villanos ({summary?.villainCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostrar todos los personajes favoritos */}
            <HeroGrid heroes={favorites} />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar todos los héroes */}
            <h1>Héroes</h1>
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="villains">
            {/* Mostrar todos los Villanos */}
            <h1>Villanos</h1>
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        {selectedTab !== "favorites" && (
          <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
        )}
      </>
    </>
  );
};
