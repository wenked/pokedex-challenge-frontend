import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Pokedex from './components/Pokedex';
import GlobalStyle, { Container } from './styles/global';

const client = new QueryClient();

const App: React.FC = () => {
	return (
		<QueryClientProvider client={client}>
			<Container>
				<GlobalStyle />
				<Pokedex />
			</Container>
		</QueryClientProvider>
	);
};

export default App;
