import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { pokeApiResponse } from '../../types/pokeTypes';
import Pagination from '../Pagination';
import Pokemon from '../Pokemon';
import { PokeDexContainer, PokeListContainer, StatusContainer } from './styles';

const fetch = async (offset: number) => {
	const res = await axios.get(
		`${process.env.REACT_APP_BASE_URL}?limit=20&offset=${offset}`
	);

	return res.data;
};

interface pokedexProps {
	offset: number;
	setOffset: React.Dispatch<React.SetStateAction<number>>;
}

const Pokedex: React.FC<pokedexProps> = ({ offset, setOffset }) => {
	const {
		data,
		isLoading,
		isPreviousData,
		isFetching,
		isError,
	} = useQuery<pokeApiResponse>(['pokemons', offset], () => fetch(offset), {
		keepPreviousData: true,
	});

	return (
		<PokeDexContainer>
			{isLoading ? (
				<StatusContainer>Loading...</StatusContainer>
			) : isError ? (
				<StatusContainer>Failed to fetch data :(</StatusContainer>
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
