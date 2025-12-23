import { ChevronLeft, MoreHorizontal, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
  totalPages: number;
  page: number;
  onChangePage?: (page: number) => void;
}

export const CustomPagination = ({ totalPages, page, onChangePage }: Props) => {
  const getPages = () => {
    // Si hay 7 o menos páginas, mostrar todas
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }).map((_, i) => i + 1);
    }

    // Lógica para el principio
    if (page <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    // Lógica para el final
    if (page >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    // Lógica para el medio
    return [1, "...", page - 1, page, page + 1, "...", totalPages];
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        disabled={page === 1}
        onClick={() => onChangePage?.(page - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
        Anterior
      </Button>

      {getPages().map((item, index) =>
        typeof item === "number" ? (
          <Button
            key={index}
            variant={page === item ? "default" : "outline"}
            size="sm"
            onClick={() => onChangePage?.(item)}
          >
            {item}
          </Button>
        ) : (
          <Button key={index} variant="ghost" size="sm" disabled>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        )
      )}

      <Button
        variant="outline"
        size="sm"
        disabled={page === totalPages}
        onClick={() => onChangePage?.(page + 1)}
      >
        Siguiente
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
