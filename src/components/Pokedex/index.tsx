import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { pokeApiResponse } from '../../types/pokeTypes';
import { PokeDexContainer, PokeListContainer } from './styles';

const fetch = async (offset: number) => {
	const res = await axios.get(
		`http://localhost:3333/pokemons?limit=20&offset=${offset}`
	);

	return res.data;
};

const Pokedex: React.FC = () => {
	const [offset, setOffset] = useState(0);
	const {
		data,
		isLoading,
		error,
		isPreviousData,
		isFetching,
		isError,
	} = useQuery<pokeApiResponse>(['pokemons', offset], () => fetch(offset), {
		keepPreviousData: true,
	});

	return (
		<PokeDexContainer>
			{isLoading ? (
				<div>Loading...</div>
			) : isError ? (
				<div>Error...</div>
			) : (
				<PokeListContainer>
					{data?.pokemons.map((poke) => (
						<span>{poke.name}</span>
					))}
					<button
						onClick={() => setOffset((old) => Math.max(old - 20, 0))}
						disabled={offset === 0}>
						Previous Page
					</button>{' '}
					<button
						onClick={() => {
							if (!isPreviousData) {
								setOffset((old) => old + 20);
							}
						}}
						// Disable the Next Page button until we know a next page is available
						disabled={isPreviousData}>
						{' '}
						Next Page
					</button>
					{isFetching ? <span> Loading...</span> : null}{' '}
				</PokeListContainer>
			)}
		</PokeDexContainer>
	);
};

export default Pokedex;
