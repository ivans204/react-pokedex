import { useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { useInfiniteQuery } from 'react-query';
import useIntersectionObserver from '../../core/hooks/useIntersectionObserver';

import './PokemonList.scss';

import ListItem from 'core/components/ListItem';

import { getPokemons } from 'api';

import { Pokemon } from '../interfaces/interface.pokemonsListResponse';

interface PokemonListProps {
    onSelect: Dispatch<SetStateAction<string>>;
}

const PokemonList = ({ onSelect }: PokemonListProps) => {
    const loadMore = useRef<HTMLLIElement>(null);
    const entry = useIntersectionObserver(loadMore, {});

    const {
        fetchNextPage,
        isLoading,
        isError,
        isFetchingNextPage,
        hasNextPage,
        data,
    } = useInfiniteQuery('pokemons', getPokemons, {
        getNextPageParam: (lastPage) => lastPage.next,
    });

    useEffect(() => {
        if (entry?.isIntersecting) fetchNextPage();

        // eslint-disable-next-line
    }, [entry?.isIntersecting, data?.pageParams]);

    if (isLoading) <h1>Loading...</h1>;

    if (isError) <h1>Error...</h1>;

    return (
        <ul className="pokemon-list">
            {data?.pages.map((pokeData) =>
                pokeData.results.map((pokemon: Pokemon) => {
                    return (
                        <ListItem
                            onSelect={onSelect}
                            name={pokemon.name}
                            key={pokemon.name}
                        />
                    );
                })
            )}
            {isFetchingNextPage && !!hasNextPage && <h1>Loading...</h1>}
            <li ref={loadMore}>Hiden li</li>
        </ul>
    );
};

export default PokemonList;
