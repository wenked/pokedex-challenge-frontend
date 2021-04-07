export interface pokemonType {
	pokeId: number;
	name: string;
	img_url: string;
	weight: number;
	height: number;
	abilities: string[];
	stats: {
		hp: number;
		attack: number;
		defense: number;
		'special-attack': number;
		'special-defense': number;
		speed: number;
	};
	types: string[];
	id: number;
}

export interface pokeApiResponse {
	count: number;
	previous: string;
	next: string;
	pokemons: pokemonType[];
}
