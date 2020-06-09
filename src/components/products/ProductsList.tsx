import React, { useEffect } from 'react';

import useProducts from '../../hooks/useProducts';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const ProductsList = (props: object) => {
	const { products, getProducts } = useProducts();

	useEffect(() => {
		getProducts();
	}, []);
	console.log(products);

	const onClick = (id: string) => () => {
		props.history.push(`/products/${id}`);
	};

	return (
		<Container maxWidth="sm">
			<GridList cellHeight={160} className={''} cols={3}>
				{products.map((product: object, index: number) => (
					<GridListTile key={index} cols={product.cols || 1} onClick={onClick(product.id)}>
						<img src={product.img || '../assets/coffee1.jpeg'} alt={product.productname} />
					</GridListTile>
				))}
			</GridList>
		</Container>
	);
};

export default ProductsList;
