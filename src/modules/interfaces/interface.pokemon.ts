export interface IPokemon {
    id: number;
    name: string;
    height: string;
    weight: string;
    sprites: {
        front_default: string;
    };
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }[];
    stats: {
        base_stat: number;
        stat: {
            name: string;
            url: string;
        };
    }[];
}

export interface IPokemonSpecie {
    flavor_text_entries: {
        flavor_text: string;
        language: {
            name: string;
            url: string;
        };
        version: {
            name: string;
            url: string;
        };
    }[];
    generation: {
        name: string;
        url: string;
    };
}
