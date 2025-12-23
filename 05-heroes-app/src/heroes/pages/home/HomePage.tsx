import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all");
  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de Superheroes"
          description="Descubre, explore, y gestiona tus favoritos superheroes y villanos"
        />

        <CustomBreadcrumbs currentPage="Página principal" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              Todos los personajes (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setActiveTab("favorites")}
            >
              Favoritos (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab("villains")}
            >
              Villanos (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostrar todos los personajes favoritos */}
            <h1>Favoritos!!!</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar todos los héroes */}
            <h1>Héroes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            {/* Mostrar todos los Villanos */}
            <h1>Villanos</h1>
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={10} page={1} />
      </>
    </>
  );
};
