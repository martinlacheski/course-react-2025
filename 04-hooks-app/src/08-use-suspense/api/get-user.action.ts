export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number) => {
  console.log("Función se llama");

  // Se llama a la API
  await new Promise((res) => setTimeout(res, 1000));

  console.log("Función se resolvió");

  return {
    id: id,
    name: "Martín Lacheski",
    location: "Misiones, Argentina",
    role: "Desarrollador de Software & IoT",
  };
};
