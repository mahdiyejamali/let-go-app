import axios from 'axios';
import config from '../../config.json';

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
		createProduct: async () => {
			const response = await axios.post(`${config.api.invokeUrl}/products`);
			dispatch({ type: actionTypes.SET_PRODUCT, data: response.data });
		},
	};
};

export default useProducts;
