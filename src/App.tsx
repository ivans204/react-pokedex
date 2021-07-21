import { useState, useEffect } from 'react';
import 'App.scss';

import { useQuery } from 'react-query';

import { FlexItem } from 'core/components/FlexItem.style';
import PokemonList from 'modules/components/PokemonList';
import PokemonInfo from 'modules/components/PokemonInfo';
import { getPokemonData } from 'api';

function App() {
    const [pokemonName, setPokemonName] = useState<string>('');

    const { data, refetch, isLoading } = useQuery(
        ['pokemon', pokemonName],
        () => getPokemonData(pokemonName),
        {
            enabled: !!pokemonName,
        }
    );

    useEffect(() => {
        refetch();
        console.log(data);

        //eslint-disable-next-line
    }, [pokemonName]);

    return (
        <div className="container">
            <FlexItem borderRight>
                {isLoading ? <h1>Loading...</h1> : <PokemonInfo data={data} />}
            </FlexItem>
            <FlexItem>
                <PokemonList onSelect={setPokemonName} />
            </FlexItem>
        </div>
    );
}

export default App;
