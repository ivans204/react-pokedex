import { useEffect, useRef } from 'react';

import { useInfiniteQuery } from 'react-query';
import useIntersectionObserver from './hooks/useIntersectionObserver';

import { getPokemons } from 'api';

import { Pokemon } from './interfaces/interface.pokemon';

function App() {
    const naslov = useRef<HTMLHeadingElement>(null);
    const entry = useIntersectionObserver(naslov, {});

    const { fetchNextPage, isLoading, isError, isFetchingNextPage, data } =
        useInfiniteQuery('pokemons', getPokemons, {
            getNextPageParam: (lastPage) => lastPage.next,
        });

    const handleMore = () => {
        fetchNextPage();
    };

    useEffect(() => {
        if (entry?.isIntersecting) fetchNextPage();

        // eslint-disable-next-line
    }, [entry?.isIntersecting, data?.pageParams]);

    if (isLoading || isFetchingNextPage) <h1>Loading...</h1>;

    if (isError) <h1>Error...</h1>;

    return (
        <div className="App">
            <button onClick={handleMore}>More</button>
            <ul>
                {data?.pages.map((pokeData) =>
                    pokeData.results.map((pokemon: Pokemon) => {
                        return <li key={pokemon.name}>{pokemon.name}</li>;
                    })
                )}
            </ul>
            <h1 ref={naslov}>naslov</h1>
        </div>
    );
}

export default App;
