import axios, { AxiosResponse } from 'axios';

export const baseUrl = 'https://pokeapi.co/api/v2';

const responseBody = (response: AxiosResponse) => response.data;

export const getPokemons = async ({
    pageParam = `${baseUrl}/pokemon?limit=20&offset=0`,
}): Promise<{ name: string; next: string; results: [] }> => {
    return await axios.get(pageParam).then(responseBody);
};

export const getPokemonData: any = async (pokemonName: string) => {
    return await axios
        .get(`${baseUrl}/pokemon/${pokemonName}`)
        .then(responseBody);
};

export const getPokemonSpeciesData: any = async (pokemonName: string) => {
    return await axios
        .get(`${baseUrl}/pokemon-species/${pokemonName}`)
        .then(responseBody);
};

export const getPokemonEvolutions: any = async (url: string) => {
    return await axios.get(url).then(responseBody);
};
