import { useState } from 'react';
import 'App.scss';

import { FlexItem } from 'core/components/FlexItem.style';
import PokemonList from 'modules/components/PokemonList';
import PokemonInfo from 'modules/components/PokemonInfo';

function App() {
    const [pokemonName, setPokemonName] = useState<string>('');

    return (
        <div className="container">
            <FlexItem borderRight>
                <PokemonInfo pokemonName={pokemonName} />
            </FlexItem>
            <FlexItem>
                <PokemonList onSelect={setPokemonName} />
            </FlexItem>
        </div>
    );
}

export default App;
