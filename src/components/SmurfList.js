import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> parent of e67414c (smurfs data pulled in from redux and working)
import Smurf from './Smurf';

const SmurfList = () => {
	const [smurfs, setSmurfs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchSmurfs();
		// eslint-disable-next-line
	}, []);

<<<<<<< HEAD
	// const fetchSmurfs = async () => {
	// 	setLoading(true);
	// 	const res = await fetch('http://localhost:3333/smurfs');
	// 	const data = await res.json();

	// 	setSmurfs(data);
	// 	setLoading(false);
	// };
=======
	const fetchSmurfs = async () => {
		setLoading(true);
		const res = await fetch('http://localhost:3333/smurfs');
		const data = await res.json();

		setSmurfs(data);
		setLoading(false);
	};
>>>>>>> parent of e67414c (smurfs data pulled in from redux and working)

	if (loading) {
		return <h4>Loading...</h4>;
	}

	return (
		<div className='listContainer'>
			{!loading && smurfs.length === 0 ? (
				<p>No smurfs to show...</p>
			) : (
				smurfs.map((smurf) => <Smurf smurf={smurf} key={smurf.id} />)
			)}
		</div>
	);
};

<<<<<<< HEAD
SmurfList.propTypes = {
	smurf: PropTypes.object.isRequired,
	fetchSmurfs: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
// 	smurf: state.smurf,
// });

=======
>>>>>>> parent of e67414c (smurfs data pulled in from redux and working)
export default SmurfList;

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
