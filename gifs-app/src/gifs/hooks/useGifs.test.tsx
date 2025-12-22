import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import * as getGifsActions from "../actions/get-gifs-by-query.actions";
import { useGifs } from "./useGifs";

const mockGetGifs = vi.spyOn(getGifsActions, "getGifsByQuery");

describe("useGifs", () => {
  beforeEach(() => {
    mockGetGifs.mockClear();
    mockGetGifs.mockResolvedValue([
      {
        id: "1",
        title: "Gif 1",
        url: "http://example.com/gif1.gif",
        width: 100,
        height: 100,
      },
      {
        id: "2",
        title: "Gif 2",
        url: "http://example.com/gif2.gif",
        width: 100,
        height: 100,
      },
      {
        id: "3",
        title: "Gif 3",
        url: "http://example.com/gif3.gif",
        width: 100,
        height: 100,
      },
    ]);
  });

  test("debe devolver los valores por defecto y los metodos", () => {
    const { result } = renderHook(() => useGifs());
    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousSearches.length).toBe(0);
    expect(result.current.handleClick).toBeDefined();
    expect(result.current.handleSearch).toBeDefined();
  });

  test("debe de mostrar un array de gifs", async () => {
    const { result } = renderHook(() => useGifs());
    await act(async () => {
      await result.current.handleSearch("gatitos");
    });
    expect(result.current.gifs.length).toBe(3);
  });

  test("no debe agregar búsquedas repetidas al historial", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch("gatitos");
    });

    await act(async () => {
      await result.current.handleSearch("gatitos");
    });

    expect(result.current.previousSearches.length).toBe(1);
  });

  test("debe limitar el historial a 8 elementos", async () => {
    const { result } = renderHook(() => useGifs());

    // Insertamos 8 elementos
    for (let i = 0; i < 9; i++) {
      await act(async () => {
        await result.current.handleSearch(`search-${i}`);
      });
    }

    expect(result.current.previousSearches.length).toBe(8);
    // El elemento más reciente debe ser el último buscado: search-8
    expect(result.current.previousSearches[0]).toBe("search-8");
  });

  test("debe de mostrar un array de gifs al hacer clic", async () => {
    const { result } = renderHook(() => useGifs());
    await act(async () => {
      await result.current.handleClick("Gokú");
    });
    expect(result.current.gifs.length).toBe(3);
  });

  test("no debe hacer petición a la API si el termino ya esta en cache", async () => {
    const { result } = renderHook(() => useGifs());

    // Primera petición (llama a API)
    await act(async () => {
      await result.current.handleSearch("Dragon Ball");
    });

    expect(mockGetGifs).toHaveBeenCalledTimes(1);
    mockGetGifs.mockClear();

    // Segunda petición con mismo término (debería usar caché)
    await act(async () => {
      await result.current.handleClick("dragon ball");
    });

    expect(mockGetGifs).toHaveBeenCalledTimes(0);
  });
});
