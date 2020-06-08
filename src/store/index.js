import React, { useContext, createContext, useReducer } from 'react';
import initialState from './initialState';
import reducer from '../reducers/index';

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);

export default StoreProvider;
