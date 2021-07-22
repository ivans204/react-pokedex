import { useEffect, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import useIntersectionObserver from '../../core/hooks/useIntersectionObserver';

import './PokemonList.scss';

import ListItem from 'core/components/ListItem';

import { getPokemons } from 'api';

import { Pokemon } from '../interfaces/interface.pokemonsListResponse';

const PokemonList = ({ onSelect }: any) => {
    const loadMore = useRef<HTMLLIElement>(null);
    const entry = useIntersectionObserver(loadMore, {});

    const { fetchNextPage, isLoading, isError, isFetchingNextPage, data } =
        useInfiniteQuery('pokemons', getPokemons, {
            getNextPageParam: (lastPage) => lastPage.next,
        });

    useEffect(() => {
        if (entry?.isIntersecting) fetchNextPage();

        // eslint-disable-next-line
    }, [entry?.isIntersecting, data?.pageParams]);

    if (isLoading || isFetchingNextPage) <h1>Loading...</h1>;

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
            <li ref={loadMore}>Hiden li</li>
        </ul>
    );
};

export default PokemonList;
