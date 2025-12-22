import type { GiphyRandomResponse } from "../data/giphy-response";

const API_KEY = "IxbLLfPGd9JpfT7NsgjL0umw1Sm0kis0";

// Generamos la petición fetch
const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

// Función para crear la imagen y añadirla al body
const createImage = (url: string) => {
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);  
}


// Procesamos la respuesta de la petición
myRequest
  // La respuesta la convertimos a JSON
  .then((response) => response.json())
  // El JSON lo mostramos por consola
  // .then((response) => console.log(response))
  .then(({ data }: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    console.log(imageUrl);
    createImage(imageUrl);
  })
  // Si hay algún error lo mostramos por consola
  .catch((err) => {
    console.error(err);
  });
