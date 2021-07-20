import { useEffect, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import useIntersectionObserver from '../../../core/hooks/useIntersectionObserver';

import './style.scss';

import { getPokemons } from 'api';

import { Pokemon } from '../../interfaces/interface.pokemon';

const PokemonList = () => {
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
                    return <li key={pokemon.name}>{pokemon.name}</li>;
                })
            )}
            <li ref={loadMore}>Hiden li</li>
        </ul>
    );
};

export default PokemonList;
