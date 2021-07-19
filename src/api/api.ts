import axios, { AxiosResponse } from 'axios';

export const baseUrl = 'https://pokeapi.co/api/v2';

const responseBody = (response: AxiosResponse) => response.data;

export const getPokemons = async ({
    pageParam = `${baseUrl}/pokemon?limit=100&offset=0`,
}) => {
    return await axios.get(pageParam).then(responseBody);
};
