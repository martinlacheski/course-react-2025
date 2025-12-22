import type { GiphyRandomResponse } from "../data/giphy-response";

const API_KEY = "IxbLLfPGd9JpfT7NsgjL0umw1Sm0kis0";

// Función para crear la imagen y añadirla al body
const createImage = (url: string) => {
  const img = document.createElement("img");
  img.src = url;
  document.body.append(img);
};

// Hacemos la petición fetch para obtener un gif aleatorio
const getRandomGifUrl = async () => {
  // Generamos la petición fetch y esperamos la respuesta
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  );

  // Esperamos a que se resuelva la promesa y extraemos el JSON
  const { data }: GiphyRandomResponse = await response.json();

  // Devolvemos la URL de la imagen
  return data.images.original.url;
};

// Llamamos a la función y cuando se resuelva la promesa, creamos la imagen
getRandomGifUrl().then(
    url => createImage(url)
);