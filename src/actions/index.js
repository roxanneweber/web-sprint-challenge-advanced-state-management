import { FETCH_SMURFS, SET_LOADING, SMURFS_ERROR } from './types';

export const fetchSmurfs = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch('/smurfs');
		const data = await res.json();

		dispatch({
			type: FETCH_SMURFS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: SMURFS_ERROR,
			payload: err.response.data,
		});
	}
};

// set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
