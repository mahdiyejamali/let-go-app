import React, { useEffect } from 'react';

import useProducts from '../../hooks/useProducts';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import ProductCard from './ProductCard';

const ProductsList = () => {
	const { products, getProducts } = useProducts();

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<Container>
			<GridList className={''} cols={3}>
				{products.map((product: object, index: number) => (
					<GridListTile rows={2} cols={1} key={index}>
						<ProductCard product={product} />
					</GridListTile>
				))}
			</GridList>
		</Container>
	);
};

export default ProductsList;
