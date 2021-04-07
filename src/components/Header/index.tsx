import React from 'react';
import { HeaderContainer } from './styles';
import { CgPokemon } from 'react-icons/cg';

interface headerProps {
	setOffset: React.Dispatch<React.SetStateAction<number>>;
}

const Header: React.FC<headerProps> = ({ setOffset }) => {
	return (
		<HeaderContainer onClick={() => setOffset(0)}>
			<CgPokemon size={35} />
			<header>PokeDex</header>
		</HeaderContainer>
	);
};

export default Header;
