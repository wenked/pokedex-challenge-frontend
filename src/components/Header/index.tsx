import React from 'react';
import { HeaderContainer } from './styles';
import { CgPokemon } from 'react-icons/cg';

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<CgPokemon size={35} />
			<header>PokeDex</header>
		</HeaderContainer>
	);
};

export default Header;
