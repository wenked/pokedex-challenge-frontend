import styled from 'styled-components';

export const PaginationContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	span {
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		paddng: 10px;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Button = styled.button`
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 10px;
	margin: 10px;
	font-weight: 600;
	cursor: pointer;
	background-color: #007090;
	color: #e9ecef;
	font-family: 'Roboto', sans-serif;
	width: 150px;
	box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
	&:hover {
		background-color: #f8f9fa;
		color: #007090;
	}
`;
