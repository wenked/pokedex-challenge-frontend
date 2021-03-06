import styled from 'styled-components';

export const PokemonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	margin-top: 20px;
	padding: 20px;
	background-color: #495057;
	border-radius: 10px;
	box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
	width: 250px;
	transition: 0.2s ease-in-out all;
	cursor: pointer;
	&:hover {
		transform: scale(1.05);
	}
`;

export const TitleButton = styled.button`
	outline: none;
	border: none;
	cursor: pointer;
	font-weight: 700;
	font-size: 16px;
	color: #e9ecef;
	background-color: inherit;
	text-transform: capitalize;
	margin: 10px;

	&:hover {
		color: #ced4da;
	}
`;

export const PrincipalContainer = styled.div`
	margin: 0 auto;
	h3 {
		display: flex;
		justify-content: center;
	}
`;

export const PokeImg = styled.img``;

export const DetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	h4 {
		padding: 5px;
	}
	h5 {
		padding: 5px 5px 5px 20px;
	}
`;
