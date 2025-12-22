import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy";


describe("Giphy API", () => {
  test("Debe estar configurada correctamente", () => {

    const params = giphyApi.defaults.params;
    expect(giphyApi.defaults.baseURL).toBe("https://api.giphy.com/v1/gifs");
    expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);
  })
})