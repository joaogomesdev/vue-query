import { api } from "./axios";


export async function getPokemons() {
  const { data } = await api.get('/pokemon?limit=100&offset=0')
  
  return await data.results
}

