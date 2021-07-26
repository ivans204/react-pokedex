import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { Flex } from 'core/components/Flex.style';

import { IPokemon } from 'modules/interfaces/interface.pokemon';

import './PokemonInfo.scss';

import { getPokemonData } from 'api';
import StatusInfo from './StatusInfo';

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

    if (!!!pokemonName) return <StatusInfo infoMsg="No data... yet..." />;

    if (isLoading) return <StatusInfo infoMsg="Loading..." />;

    return (
        <div className="pokemon-info-container">
            <div className="info-section">
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
            <div className="info-section">
                <h2 style={{ borderBottom: '1px solid #e8ecef' }}>
                    Base Stats
                </h2>
                <Flex row>
                    <Flex column align="center" style={{ marginRight: '10px' }}>
                        Height
                        <span>{pokeData.height}</span>
                    </Flex>
                    <Flex column align="center" style={{ marginRight: '10px' }}>
                        Weight <span>{pokeData.weight}</span>
                    </Flex>
                </Flex>
            </div>
            <div className="info-section">
                <h2 style={{ borderBottom: '1px solid #e8ecef' }}>Stats</h2>
                <Flex row fwrap>
                    {pokeData.stats?.map((stat) => (
                        <Flex
                            key={stat.stat.name}
                            column
                            align="center"
                            style={{ flex: '0 1 25%' }}
                        >
                            {stat.stat.name}
                            <span>{stat.base_stat}</span>
                        </Flex>
                    ))}
                </Flex>
            </div>
        </div>
    );
};

export default PokemonInfo;
