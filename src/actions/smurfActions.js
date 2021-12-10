import { FETCH_SMURFS, SET_LOADING, SMURFS_ERROR, ADD_SMURF } from './types';
import axios from 'axios';

// get smurf data
export const fetchSmurfs = (props) => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch('http://localhost:3333/smurfs');
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

// add a smurf
export const addSmurf = (props) => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch('http://localhost:3333/smurfs', {
			method: 'POST',
			body: JSON.stringify(props),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		dispatch({
			type: ADD_SMURF,
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
