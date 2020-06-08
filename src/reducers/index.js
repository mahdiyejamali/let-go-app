const reducer = (state, action) => {
	const { type, data } = action;
	switch (type) {
		case 'SET_PRODUCT':
			return {
				...state,
				product: data,
			};
		case 'SET_PRODUCTS':
			return {
				...state,
				products: data,
			};
		default:
			throw new Error(`Unhandled action type: ${type}`);
	}
};

export default reducer;
