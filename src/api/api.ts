import axios, { AxiosResponse } from 'axios';

export const baseUrl = 'https://pokeapi.co/api/v2';

const responseBody = (response: AxiosResponse) => response.data;

export const getPokemons = async ({
    pageParam = `${baseUrl}/pokemon?offset=0limit=100`,
}) => {
    return await axios.get(pageParam).then(responseBody);
};
