export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonResponse {
    count: number;
    next: string | null;
    prev: string | null;
    results: Pokemon[];
}
