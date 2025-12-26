import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Product } from "@/mocks/products.mock";
import { Filter, Grid, List } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router";
import { FilterSidebar } from "./FilterSidebar";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Product[];
}

export const ProductsGrid = ({ products }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [showFilters, setShowFilters] = useState(false);
  const viewMode = searchParams.get("viewMode") || "grid";

  const handleViewModeChange = (mode: "grid" | "list") => {
    searchParams.set("viewMode", mode);
    setSearchParams(searchParams);
  };

  return (
    <section className="py-12 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-3xl font-light">Productos</h2>
            <span className="text-muted-foreground">
              ({products.length} productos)
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Sheet open={showFilters} onOpenChange={setShowFilters}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="lg:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetTitle>Filtros</SheetTitle>
                <FilterSidebar />
              </SheetContent>
            </Sheet>

            <div className="hidden md:flex border rounded-md">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => handleViewModeChange("grid")}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => handleViewModeChange("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Mobile Filters */}

          {/* Products Grid */}
          <div className="flex-1">
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
