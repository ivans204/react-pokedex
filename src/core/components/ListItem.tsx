import { FC } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import { colors } from '../theme';
import { getPokemonData } from 'api';

interface ListItemProps {
    name: string;
}

const ListItem: FC<ListItemProps> = ({ name }) => {
    const pokemon = useQuery(
        ['singlePokemon', name],
        () => getPokemonData(name),
        {
            enabled: false,
        }
    );

    const handleRefetch = (): void => {
        pokemon.refetch();
    };

    return <StyledLi onClick={handleRefetch}>{name}</StyledLi>;
};

export default ListItem;

const StyledLi = styled.li`
    padding: 10px 25px;
    border-bottom: 1px solid ${colors.borderGray};
    cursor: pointer;

    &:first-of-type {
        border-top: 2px solid ${colors.borderGray};
    }
`;
