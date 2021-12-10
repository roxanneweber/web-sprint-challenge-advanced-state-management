import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSmurfs } from '../actions/smurfActions';
import Smurf from './Smurf';

const SmurfList = ({ smurf: { smurfs, loading }, fetchSmurfs }) => {
	useEffect(() => {
		fetchSmurfs();
		// eslint-disable-next-line
	}, []);

	if (loading || smurfs === null) {
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

SmurfList.propTypes = {
	smurf: PropTypes.object.isRequired,
	fetchSmurfs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	smurf: state.smurf,
});

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
