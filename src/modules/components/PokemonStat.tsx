import { FC } from 'react';

import { Flex } from 'core/components/Flex.style';

import './PokemonStat.scss';

interface PokemonStatProps {
    statName: string;
    statValue: number | string;
}

const PokemonStat: FC<PokemonStatProps> = ({ statName, statValue }) => {
    return (
        <Flex key={statName} column align="center" className="poke-stat">
            {statName}
            <span>{statValue}</span>
        </Flex>
    );
};

export default PokemonStat;
