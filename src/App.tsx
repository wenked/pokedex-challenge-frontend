import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import GlobalStyle, { Container } from './styles/global';

const client = new QueryClient();

const App: React.FC = () => {
	const [offset, setOffset] = useState(0);
	return (
		<QueryClientProvider client={client}>
			<Container>
				<GlobalStyle />
				<Header setOffset={setOffset} />
				<Pokedex offset={offset} setOffset={setOffset} />
			</Container>
		</QueryClientProvider>
	);
};

export default App;
