import React from 'react';
import { connect } from 'react-redux';
import Preloader from './PreLoader';
import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';

const SmurfList = (props) => {
	const { smurfs, isLoading } = props;

	if (isLoading || smurfs === null) {
		return <Preloader />;
	}

	return (
		<section className='display'>
			<div>
				{!isLoading && smurfs.length === 0 ? (
					<p>No smurfs to show...</p>
				) : (
					smurfs.map((smurf) => <Smurf smurf={smurf} key={smurf.id} />)
				)}
			</div>
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
		isLoading: state.isLoading,
	};
};

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
