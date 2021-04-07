import React, { useState } from 'react';
import { pokemonType } from '../../types/pokeTypes';
import {
	DetailsContainer,
	PokeImg,
	PokemonContainer,
	PrincipalContainer,
	TitleButton,
} from './styles';

interface pokemonProps {
	pokemon: pokemonType;
}

const StringArrayUtil = (array: string[]) => {
	const formatedString = array.map((item, i) =>
		i !== array.length - 1 ? item + ', ' : item
	);

	return formatedString;
};

const Pokemon: React.FC<pokemonProps> = ({ pokemon }) => {
	const [toggleDetails, setToggleDetails] = useState(false);

	return (
		<PokemonContainer>
			<PrincipalContainer>
				<TitleButton onClick={() => setToggleDetails(!toggleDetails)}>
					{pokemon.name}
				</TitleButton>
				<h3>ID: {pokemon.pokeId}</h3>
				<PokeImg src={pokemon.img_url} alt={pokemon.name} />
			</PrincipalContainer>
			{toggleDetails ? (
				<DetailsContainer>
					<h4>Types: {StringArrayUtil(pokemon.types)}</h4>
					<h4>Abilities: {StringArrayUtil(pokemon.abilities)}</h4>
					<h4>Height: {pokemon.height}</h4>
					<h4>weight: {pokemon.weight}</h4>
					<h4>Stats: </h4>
					<h5>HP: {pokemon.stats.hp}</h5>
					<h5>ATTACK: {pokemon.stats.attack}</h5>
					<h5>DEFENSE: {pokemon.stats.defense}</h5>
					<h5>SPEED: {pokemon.stats.speed}</h5>
					<h5>SPECIAL-ATTACK: {pokemon.stats['special-attack']}</h5>
					<h5>SPECIAL-DEFENSE: {pokemon.stats['special-defense']}</h5>
				</DetailsContainer>
			) : null}
		</PokemonContainer>
	);
};

export default Pokemon;
