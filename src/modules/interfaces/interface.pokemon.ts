export interface IPokemon {
    id: number;
    name: string;
    height: string;
    weight: string;
    sprites: {
        front_default: string;
    };
    types: Types[];
    stats: Stats[];
}

export interface Types {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface Stats {
    base_stat: number;
    stat: {
        name: string;
        url: string;
    };
}
