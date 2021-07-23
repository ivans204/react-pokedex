export interface IPokemon {
    data: {
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
    };
}
