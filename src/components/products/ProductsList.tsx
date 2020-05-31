import React from 'react';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const tileData: Array<Object> = [
	{
		id: 1,
		img: '../assets/coffee1.jpeg',
		title: 'Coffee Cup',
	},
	{
		id: 2,
		img: '../assets/coffee2.jpeg',
		title: 'Coffee Cup',
	},
	{
		id: 3,
		img: '../assets/mug1.jpeg',
		title: 'Coffee Cup',
	},
	{
		id: 4,
		img: '../assets/coffee1.jpeg',
		title: 'Coffee Cup',
	},
	{
		id: 5,
		img: '../assets/coffee2.jpeg',
		title: 'Coffee Cup',
	},
	{
		id: 6,
		img: '../assets/mug1.jpeg',
		title: 'Coffee Cup',
	},
	{
		id: 7,
		img: '../assets/coffee1.jpeg',
		title: 'Coffee Cup',
	},
	{
		id: 8,
		img: '../assets/coffee2.jpeg',
		title: 'Coffee Cup',
	},
	{
		id: 9,
		img: '../assets/mug1.jpeg',
		title: 'Coffee Cup',
	},
];

const ProductsList = ({ history }) => {
	const onClick = id => () => {
		history.push(`/products/${id}`);
	};

	return (
		<Container maxWidth="sm">
			<GridList cellHeight={160} className={''} cols={3}>
				{tileData.map((tile, index) => (
					<GridListTile key={index} cols={tile.cols || 1} onClick={onClick(tile.id)}>
						<img src={tile.img} alt={tile.title} />
					</GridListTile>
				))}
			</GridList>
		</Container>
	);
};

export default ProductsList;
