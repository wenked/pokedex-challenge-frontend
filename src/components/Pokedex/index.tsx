import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { pokeApiResponse } from '../../types/pokeTypes';
import Pagination from '../Pagination';
import Pokemon from '../Pokemon';
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
					<Pagination
						isPreviousData={isPreviousData}
						offset={offset}
						setOffset={setOffset}
						isFetching={isFetching}
					/>
					{data?.pokemons.map((poke) => (
						<Pokemon pokemon={poke} key={poke.id} />
					))}
					<Pagination
						isPreviousData={isPreviousData}
						offset={offset}
						setOffset={setOffset}
						isFetching={isFetching}
					/>
				</PokeListContainer>
			)}
		</PokeDexContainer>
	);
};

export default Pokedex;
