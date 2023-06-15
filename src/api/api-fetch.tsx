export const apiService = async (id?: string) => {
  const baseApi = "https://rickandmortyapi.com/api/character";
  const endpoint = id ? `${baseApi}/${id}` : baseApi;

  try {
    const data = await fetch(endpoint, {
      method: "GET",
    });
    return data.json();
  } catch (error) {
    console.log("Error en la peticion", error);
  }
};
