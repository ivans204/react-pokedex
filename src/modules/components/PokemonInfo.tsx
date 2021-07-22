import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { IPokemon } from 'modules/interfaces/interface.pokemon';

import { getPokemonData } from 'api';

const PokemonInfo = ({ pokemonName }: { pokemonName: string }) => {
    const { data, refetch, isLoading } = useQuery<IPokemon>(
        ['pokemon', pokemonName],
        () => getPokemonData(pokemonName),
        {
            enabled: !!pokemonName,
        }
    );
    const pokeData = { ...data?.data };

    useEffect(() => {
        refetch();
        //eslint-disable-next-line
    }, [pokemonName]);

    if (!!!pokemonName) return <h1>No data... yet...</h1>;
    if (isLoading) return <h1>Is Loading...</h1>;

    return (
        <div className="pokemon-info-container">
            {pokeData?.name}
            <br />
            {pokeData?.height}
        </div>
    );
};

export default PokemonInfo;
