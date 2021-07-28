import { useEffect } from 'react';
import { useQueries } from 'react-query';

import { Flex } from 'core/components/Flex.style';

import StatusInfo from './StatusInfo';

import { IPokemon } from 'modules/interfaces/interface.pokemon';
import { IPokemonSpecie } from 'modules/interfaces/interface.pokemonSpecie';

import './PokemonInfo.scss';

import { getPokemonData, getPokemonSpeciesData } from 'api';
import PokemonStat from './PokemonStat';

interface QueryResponse<T> {
    data: T;
    refetch(): void;
    isLoading: boolean;
}

const PokemonInfo = ({ pokemonName }: { pokemonName: string }) => {
    const result = useQueries([
        {
            queryKey: ['pokemon', pokemonName],
            queryFn: () => getPokemonData(pokemonName),
        },
        {
            queryKey: ['pokemon-specie', pokemonName],
            queryFn: () => getPokemonSpeciesData(pokemonName),
        },
    ]);

    const {
        data: statsData,
        refetch: statsRefetch,
        isLoading: statsIsLoading,
    } = result[0] as QueryResponse<IPokemon>;

    const {
        data: speciesData,
        refetch: speciesRefetch,
        isLoading: speciesIsLoading,
    } = result[1] as QueryResponse<IPokemonSpecie>;

    useEffect(() => {
        statsRefetch();
        speciesRefetch();
        //eslint-disable-next-line
    }, [pokemonName]);

    if (!!!pokemonName) return <StatusInfo infoMsg="No data... yet..." />;

    if (statsIsLoading || speciesIsLoading)
        return <StatusInfo infoMsg="Loading..." />;

    return (
        <div className="pokemon-info-container">
            <div className="info-section">
                <Flex row>
                    <h3>#{statsData?.id}</h3>
                </Flex>

                <Flex row>
                    <h1>{statsData?.name}</h1>
                </Flex>
                <Flex>
                    <img src={statsData?.sprites?.front_default} alt="" />
                </Flex>
            </div>

            <div className="info-section">
                <h2 className="info-section_title">Base Stats</h2>
                <Flex row>
                    <PokemonStat
                        statName="Height"
                        statValue={statsData?.height as string}
                    />
                    <PokemonStat
                        statName="Weight"
                        statValue={statsData?.weight as string}
                    />
                    <PokemonStat
                        statName="Generation"
                        statValue={speciesData.generation.name
                            .slice(-1)
                            .toUpperCase()}
                    />
                    <PokemonStat
                        statName="Type"
                        statValue={statsData.types.map(
                            ({ type }) => type.name + '/'
                        )}
                    />
                </Flex>
            </div>

            <div className="info-section">
                <h2 className="info-section_title">Stats</h2>
                <Flex row fwrap>
                    {statsData?.stats.map(({ stat, base_stat }) => (
                        <PokemonStat
                            key={stat.name}
                            statName={stat.name}
                            statValue={base_stat}
                        />
                    ))}
                </Flex>
            </div>

            <div className="info-section">
                <h2 className="info-section_title">Evolutions</h2>
                <Flex row fwrap></Flex>
            </div>
        </div>
    );
};

export default PokemonInfo;
