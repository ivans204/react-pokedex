import 'App.scss';

import { FlexItem } from 'core/components/FlexItem.style';
import PokemonList from 'modules/components/PokemonList';
import PokemonInfo from 'modules/components/PokemonInfo';

function App() {
    return (
        <div className="container">
            <FlexItem>
                <PokemonInfo />
            </FlexItem>
            <FlexItem>
                <PokemonList />
            </FlexItem>
        </div>
    );
}

export default App;
