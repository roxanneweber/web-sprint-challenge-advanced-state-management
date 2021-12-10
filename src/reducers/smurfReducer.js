import { FETCH_SMURFS, SET_LOADING, SMURFS_ERROR } from '../actions/types';

const initialState = {
	smurfs: null,
	loading: false,
	current: null,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SMURFS:
			return {
				...state,
				smurfs: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case SMURFS_ERROR:
			console.error(action.payload);
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
