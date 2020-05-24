import React from 'react';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const tileData: Array<Object> = [
	{
		img: '../assets/coffee1.jpeg',
		title: 'Coffee Cup',
	},
	{
		img: '../assets/coffee2.jpeg',
		title: 'Coffee Cup',
	},
	{
		img: '../assets/mug1.jpeg',
		title: 'Coffee Cup',
	},
	{
		img: '../assets/coffee1.jpeg',
		title: 'Coffee Cup',
	},
	{
		img: '../assets/coffee2.jpeg',
		title: 'Coffee Cup',
	},
	{
		img: '../assets/mug1.jpeg',
		title: 'Coffee Cup',
	},
	{
		img: '../assets/coffee1.jpeg',
		title: 'Coffee Cup',
	},
	{
		img: '../assets/coffee2.jpeg',
		title: 'Coffee Cup',
	},
	{
		img: '../assets/mug1.jpeg',
		title: 'Coffee Cup',
	},
];

const ProductsList = () => (
	<Container maxWidth="sm">
		<GridList cellHeight={160} className={''} cols={3}>
			{tileData.map((tile, index) => (
				<GridListTile
					key={index}
					cols={tile.cols || 1}
					onClick={() => {
						console.log('Go to Details');
					}}
				>
					<img src={tile.img} alt={tile.title} />
				</GridListTile>
			))}
		</GridList>
	</Container>
);

export default ProductsList;
