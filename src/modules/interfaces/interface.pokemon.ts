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
