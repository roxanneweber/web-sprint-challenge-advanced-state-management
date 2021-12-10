import React, { useState, useEffect } from 'react';
import Smurf from './Smurf';
import PropTypes from 'prop-types';

const SmurfList = () => {
	const [smurfs, setSmurfs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchSmurfs();
		// eslint-disable-next-line
	}, []);

	const fetchSmurfs = async () => {
		setLoading(true);
		const res = await fetch('http://localhost:3333/smurfs');
		const data = await res.json();

		setSmurfs(data);
		setLoading(false);
	};

	console.log(fetchSmurfs);

	if (loading) {
		return <h4>Loading...</h4>;
	}

	return (
		<div className='listContainer'>
			{!loading && smurfs.length === 0 ? (
				<p>No smurfs to show...</p>
			) : (
				smurfs.map((smurf) => <li>{smurf.name}</li>)
			)}

			{/* <Smurf smurf={fetchSmurfs} /> */}
		</div>
	);
};

export default SmurfList;

SmurfList.propTypes = {
	smurf: PropTypes.object.isRequired,
};

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
