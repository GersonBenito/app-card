export interface PokemonDetail {
    id: number;
    name: string;
    base_experience: number;
    species: string;
    sprites: string;
    types: string[];
    abilities: string[];
    stats: Stats[];
    evolutions: Evolutions[];
    height: number;
    weight: number;
}

interface Stats {
    base_stat: number;
    name: string;
}

interface Evolutions{
    name: string;
    sprite: string;
    form: string;
}