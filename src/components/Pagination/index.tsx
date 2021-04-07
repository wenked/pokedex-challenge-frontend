import React from 'react';
import { Button, PaginationContainer } from './styles';

interface paginationProps {
	isFetching: boolean;
	isPreviousData: boolean;
	offset: number;
	setOffset: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<paginationProps> = ({
	isPreviousData,
	offset,
	setOffset,
	isFetching,
}) => {
	return (
		<PaginationContainer>
			<Button
				onClick={() => setOffset((old) => Math.max(old - 20, 0))}
				disabled={offset === 0}>
				Previous Page
			</Button>{' '}
			<Button
				onClick={() => {
					if (!isPreviousData) {
						setOffset((old) => old + 20);
					}
				}}
				disabled={isPreviousData}>
				{' '}
				Next Page
			</Button>
			{isFetching ? <span> Loading...</span> : null}{' '}
		</PaginationContainer>
	);
};

export default Pagination;
