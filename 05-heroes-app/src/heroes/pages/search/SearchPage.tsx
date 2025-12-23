import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de Superheroes"
        description="Encuentra tus favoritos superheroes y villanos"
      />
      <CustomBreadcrumbs
        currentPage="Búsqueda"
        // breadcrumbs={[
        //   { label: 'Home1', to: '/' },
        //   { label: 'Home2', to: '/' },
        //   { label: 'Home3', to: '/' },
        // ]}
      />
      {/* Stats Dashboard */}
      <HeroStats />
      {/* Filter and search controls */}
      <SearchControls />
    </>
  );
};
