import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Filter, Grid, Plus, Search, SortAsc, SortDesc, X } from "lucide-react";
import { useRef, useState } from "react";
import { useSearchParams } from "react-router";

export const SearchControls = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  // Estado local para el valor del input
  const [inputValue, setInputValue] = useState(searchParams.get("name") ?? "");

  const activeAccordion = searchParams.get("active-accordion") ?? "";
  const selectedStrength = Number(searchParams.get("strength") ?? "0");

  const setQueryParams = (name: string, value: string) => {
    setSearchParams((prev) => {
      if (value) {
        prev.set(name, value);
      } else {
        prev.delete(name);
      }
      return prev;
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setQueryParams("name", inputValue);
    }
  };

  const handleClearSearch = () => {
    setInputValue("");
    setQueryParams("name", "");
    inputRef.current?.focus();
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            ref={inputRef}
            placeholder="Buscar por nombre"
            className="pl-12 pr-10 h-12 text-lg bg-white"
            onKeyDown={handleKeyDown}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {/* Botón para limpiar búsqueda */}
          {inputValue && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
              aria-label="Limpiar búsqueda"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Resto del código permanece igual */}
        <div className="flex gap-2">
          <Button
            variant={
              activeAccordion === "advance-filters" ? "default" : "outline"
            }
            className="h-12"
            onClick={() => {
              if (activeAccordion === "advance-filters") {
                setQueryParams("active-accordion", "");
                return;
              }
              setQueryParams("active-accordion", "advance-filters");
            }}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>

          <Button
            variant="outline"
            className="h-12"
            onClick={() => {
              const currentSort = searchParams.get("sort") || "asc";
              const newSort = currentSort === "asc" ? "desc" : "asc";
              setQueryParams("sort", newSort);
            }}
          >
            {searchParams.get("sort") === "desc" ? (
              <SortDesc className="h-4 w-4 mr-2" />
            ) : (
              <SortAsc className="h-4 w-4 mr-2" />
            )}
            Ordenar por nombre
          </Button>

          <Button variant="outline" className="h-12">
            <Grid className="h-4 w-4" />
          </Button>

          <Button className="h-12">
            <Plus className="h-4 w-4 mr-2" />
            Agregar personaje
          </Button>
        </div>
      </div>

      {/* Advanced Filters - Código permanece igual */}
      <Accordion
        type="single"
        collapsible
        value={activeAccordion}
        data-testid="accordion"
      >
        <AccordionItem value="advance-filters">
          <AccordionContent>
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Filtros avanzados</h3>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSearchParams({ "active-accordion": "advance-filters" });
                    setInputValue("");
                  }}
                >
                  Limpiar todos
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Equipo</label>
                  <select
                    className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    value={searchParams.get("team") ?? ""}
                    onChange={(e) => setQueryParams("team", e.target.value)}
                  >
                    <option value="">Todos los equipos</option>
                    <option value="Liga de la Justicia">
                      Liga de la Justicia
                    </option>
                    <option value="Batfamilia">Batfamilia</option>
                    <option value="Suicide Squad">Escuadrón suicida</option>
                    <option value="Jóvenes Titanes">Jóvenes Titanes</option>
                    <option value="Vengadores">Vengadores</option>
                    <option value="X-Men">X-Men</option>
                    <option value="Solo">Solo</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Categoría</label>
                  <select
                    className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    value={searchParams.get("category") ?? ""}
                    onChange={(e) => setQueryParams("category", e.target.value)}
                  >
                    <option value="">Todas las categorías</option>
                    <option value="Hero">Héroe</option>
                    <option value="Villain">Villano</option>
                    <option value="Antihero">Antihéroe</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Universo</label>
                  <select
                    className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    value={searchParams.get("universe") ?? ""}
                    onChange={(e) => setQueryParams("universe", e.target.value)}
                  >
                    <option value="">Todos los universos</option>
                    <option value="Marvel">Marvel</option>
                    <option value="DC">DC</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Estado</label>
                  <select
                    className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    value={searchParams.get("status") ?? ""}
                    onChange={(e) => setQueryParams("status", e.target.value)}
                  >
                    <option value="">Todos los estados</option>
                    <option value="Active">Activo</option>
                    <option value="Deceased">Fallecido</option>
                    <option value="Unknown">Desconocido</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium">
                  Fuerza mínima: {selectedStrength}/10
                </label>
                <Slider
                  value={[selectedStrength]}
                  onValueChange={(value) =>
                    setQueryParams("strength", value[0].toString())
                  }
                  max={10}
                  step={1}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
