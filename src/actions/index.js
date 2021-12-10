import axios from 'axios';

/*
  Task List:
  1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, 
     performs an axios call to retrieve smurfs from our server, saves the result of that call to our 
     state and shows an error if one is made.
  2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
  3. Add a standard action that allows us to set the value of the error message slice of state.
*/

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';
export const ERROR_MSG = 'ERROR_MSG';
export const ADD_SMURF = 'ADD_SMURF';

export const fetchSmurfs = () => (dispatch) => {
	dispatch({ type: FETCH_SMURFS });
	axios
		.get('http://localhost:3333/smurfs')
		.then((res) => {
			dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
			dispatch(setErrorText(''));
		})
		.catch((err) => {
			dispatch(setErrorText(err.response.data.Error));
		});
};

export const addSmurf = (smurf) => (dispatch) => {
	console.log(smurf);
	if (!smurf.name || !smurf.nickname || !smurf.position) {
		dispatch({
			type: ERROR_MSG,
			payload: 'Name, Position and Nickname are required fields',
		});
	}

	axios
		.post('http://localhost:3333/smurfs', smurf)
		.then((res) => {
			dispatch({ type: ADD_SMURF, payload: { ...smurf, id: Date.now() } });
			dispatch(setErrorText(''));
		})
		.catch((err) => {
			dispatch(setErrorText(err.response.data.Error));
		});
};

export const setErrorText = (err) => {
	return { type: ERROR_MSG, payload: err };
};
