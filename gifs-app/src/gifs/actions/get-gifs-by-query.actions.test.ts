import { describe, expect, test } from "vitest";

import AxiosMockAdapter from "axios-mock-adapter";
import { mockGiphyResponse } from "../../tests/mocks/giphy.mock";
import { giphyApi } from "../api/giphy";
import { getGifsByQuery } from "./get-gifs-by-query.actions";

describe("getGifsByQuery", () => {
  const mock = new AxiosMockAdapter(giphyApi);
  //   test("Debería obtener gifs por query", async () => {
  //     const query = "gatitos";
  //     const gifs = await getGifsByQuery(query);
  //     expect(gifs).toHaveLength(10);
  //     // console.log(gifs);

  //     expect(gifs[0]).toStrictEqual({
  //       id: expect.any(String),
  //       title: expect.any(String),
  //       url: expect.any(String),
  //       width: expect.any(Number),
  //       height: expect.any(Number),
  //     });

  test("Debería obtener gifs por query", async () => {
    mock.onGet("/search").reply(200, mockGiphyResponse);

    const gifs = await getGifsByQuery("gatitos");

    expect(gifs.length).toBe(1);

    gifs.forEach((gif) => {
      expect(gif).toStrictEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String),
        width: expect.any(Number),
        height: expect.any(Number),
      });
    });
  });

  test("Debería retornar un arreglo vacío si falla la petición", async () => {
    mock.onGet("/search").networkError();

    const gifs = await getGifsByQuery("gatitos");

    expect(gifs).toEqual([]);
  });
});
