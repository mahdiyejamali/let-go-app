import React, { useState } from 'react';
import { isEmpty } from 'ramda';

// Components
import Container from '@material-ui/core/Container';
import { Paper, Grid, Button, TextField, FormLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Dropzone from '../common/Dropzone';

// Hooks
import useProducts from '../../hooks/useProducts';

const useStyles = makeStyles({
	container: {
		marginTop: '30px',
	},
});

const ProductUploadImages = () => {
	const classes = useStyles();
	const [files, setFiles] = useState<Array<File>>([]);
	const { getProductImageUploadUrl, uploadImage } = useProducts();

	const handleUpload = async () => {
		// Get the presigned upload url
		getProductImageUploadUrl().then(data => {
			console.log(files[0]);
			// Upload image to the url
			const { uploadURL } = data;
			const uploadResponse = uploadImage(uploadURL, files[0]);
			console.log(uploadResponse);
		});
	};

	return (
		<Container maxWidth="sm">
			<form className={classes.container} onSubmit={() => {}} noValidate>
				<Paper style={{ padding: 16 }}>
					<Grid container alignItems="flex-start" spacing={2}>
						<Grid item xs={12}>
							<FormLabel>Upload</FormLabel>
							<Dropzone onChange={setFiles} />
						</Grid>
						<Grid item style={{ marginTop: 16 }}>
							<Button
								variant="contained"
								color="primary"
								type="button"
								disabled={isEmpty(files)}
								onClick={handleUpload}
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

export default ProductUploadImages;
