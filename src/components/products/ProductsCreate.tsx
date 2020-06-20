import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import { Paper, Grid, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useProducts from '../../hooks/useProducts';

const useStyles = makeStyles({
	container: {
		marginTop: '30px',
	},
});

const ProductsCreate = () => {
	const classes = useStyles();
	const { createProduct } = useProducts();
	const [formData, setFormData] = useState({ productname: '', description: '' });

	const handleSubmit = () => {
		createProduct(formData);
	};

	const handleChange = ({ target: { name, value } }) => {
		setFormData({ ...formData, [name]: value });
	};

	return (
		<Container maxWidth="sm">
			<form className={classes.container} onSubmit={() => {}} noValidate>
				<Paper style={{ padding: 16 }}>
					<Grid container alignItems="flex-start" spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="productname"
								label="Product Name"
								name="productname"
								autoComplete="productname"
								onChange={handleChange}
								autoFocus
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="description"
								label="Description"
								name="description"
								autoComplete="description"
								onChange={handleChange}
								autoFocus
							/>
						</Grid>
						<Grid item style={{ marginTop: 16 }}>
							<Button
								variant="contained"
								color="primary"
								type="button"
								onClick={handleSubmit}
								disabled={false}
							>
								Submit
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</form>
		</Container>
	);
};

export default ProductsCreate;
