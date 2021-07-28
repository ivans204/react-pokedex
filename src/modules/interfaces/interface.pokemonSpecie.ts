export interface IPokemonSpecie {
    flavor_text_entries: FlavorTextEntry[];
    generation: {
        name: string;
        url: string;
    };
    evolution_chain: {
        url: string;
    };
}

export interface FlavorTextEntry {
    flavor_text: string;
    language: {
        name: string;
        url: string;
    };
    version: {
        name: string;
        url: string;
    };
}
