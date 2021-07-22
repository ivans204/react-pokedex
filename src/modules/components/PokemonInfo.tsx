import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { IPokemon } from 'modules/interfaces/interface.pokemon';

import { Flex } from 'core/components/Flex.style';

import './PokemonInfo.scss';

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

    if (!!!pokemonName)
        return (
            <Flex
                style={{ width: '100%', height: '100%' }}
                align={'center'}
                justify={'center'}
            >
                <h1>No data... yet...</h1>
            </Flex>
        );
    if (isLoading)
        return (
            <Flex
                style={{ width: '100%', height: '100%' }}
                align={'center'}
                justify={'center'}
            >
                <h1>Loading...</h1>
            </Flex>
        );

    return (
        <div className="pokemon-info-container">
            <Flex row>
                <h3>#{pokeData.id}</h3>
            </Flex>

            <Flex row>
                <h1>{pokeData.name}</h1>
            </Flex>
            <Flex>
                <img src={pokeData.sprites?.front_default} alt="" />
            </Flex>
        </div>
    );
};

export default PokemonInfo;
