import React from 'react';
import { useHistory } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import KeyboardArrowRightSharpIcon from '@material-ui/icons/KeyboardArrowRightSharp';

import ImageSlider from '../common/ImageSlider';

const useStyles = makeStyles(() => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	open: {
		marginLeft: 'auto',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

interface IProps {
	product: { id: string; productname: string };
}

const ProductCard = (props: IProps) => {
	const classes = useStyles();
	const history = useHistory();
	const { product } = props;

	const handleOpen = () => {
		history.push(`/products/${product.id}`);
	};

	return (
		<Card className={classes.root}>
			<CardHeader title={product.productname} />
			{/* <CardMedia
				className={classes.media}
				image="../assets/coffee1.jpeg"
				title={product.productname}
			/> */}
			<ImageSlider />
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<IconButton className={classes.open} onClick={handleOpen} aria-label="open details page">
					<KeyboardArrowRightSharpIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default ProductCard;
