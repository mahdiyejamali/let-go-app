import axios from 'axios';
import config from '../../config.json';
import { Auth } from 'aws-amplify';

import { useStore } from '../store/index';

const actionTypes = {
	SET_PRODUCT: 'SET_PRODUCT',
	SET_PRODUCTS: 'SET_PRODUCTS',
};

const useProducts = () => {
	const { state, dispatch } = useStore();
	return {
		products: state.products,
		setProducts: (data: any) => dispatch({ type: actionTypes.SET_PRODUCTS, data }),
		getProducts: async () => {
			const response = await axios.get(`${config.api.invokeUrl}/products`);
			dispatch({ type: actionTypes.SET_PRODUCTS, data: response.data });
		},
		createProduct: async (product: object) => {
			const response = await axios.post(`${config.api.invokeUrl}/products`, product, {
				headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
			});
			console.log(response);
			dispatch({ type: actionTypes.SET_PRODUCT, data: response.data });
		},
		getProductImageUploadUrl: async () => {
			const response = await axios.get(`${config.api.invokeUrl}/images/image-url`);
			return Promise.resolve(response).then(response => response.data);
		},
		uploadImage: async (url: string, file: any) => {
			const token = `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`;
			const response = await axios
				.put(url, file, {
					headers: {
						// Authorization: token,
						'Access-Control-Allow-Origin': '*',
						'Content-Type': file.type,
					},
				})
				.then(res => console.log(res));
			return response;
		},
	};
};

export default useProducts;
