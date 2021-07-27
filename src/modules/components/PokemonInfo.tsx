import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { Flex } from 'core/components/Flex.style';

import StatusInfo from './StatusInfo';

import { IPokemon } from 'modules/interfaces/interface.pokemon';

import './PokemonInfo.scss';

import { getPokemonData } from 'api';
import PokemonStat from './PokemonStat';

const PokemonInfo = ({ pokemonName }: { pokemonName: string }) => {
    const { data, refetch, isLoading } = useQuery<IPokemon>(
        ['pokemon', pokemonName],
        () => getPokemonData(pokemonName),
        {
            enabled: !!pokemonName,
        }
    );

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
                    <h3>#{data?.id}</h3>
                </Flex>

                <Flex row>
                    <h1>{data?.name}</h1>
                </Flex>
                <Flex>
                    <img src={data?.sprites?.front_default} alt="" />
                </Flex>
            </div>

            <div className="info-section">
                <h2 className="info-section_title">Base Stats</h2>
                <Flex row>
                    <PokemonStat
                        statName="Height"
                        statValue={data?.height as string}
                    />
                    <PokemonStat
                        statName="Weight"
                        statValue={data?.weight as string}
                    />
                </Flex>
            </div>

            <div className="info-section">
                <h2 className="info-section_title">Stats</h2>
                <Flex row fwrap>
                    {data?.stats.map(({ stat, base_stat }) => (
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
