import React from 'react';

import Carousel from 'react-material-ui-carousel';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
}));

const ImageSlider = props => {
	const classes = useStyles();
	const { items } = props;

	return (
		<Carousel>
			{/* {items.map(item => (
				<CardMedia className={classes.media} image="../assets/coffee1.jpeg" title={item.name} />
			))} */}
			<CardMedia className={classes.media} image="../assets/coffee1.jpeg" title={'1'} />
			<CardMedia className={classes.media} image="../assets/coffee1.jpeg" title={'2'} />
		</Carousel>
	);
};

export default ImageSlider;
