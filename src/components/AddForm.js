import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSmurf } from '../actions/smurfActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddForm = ({ addSmurf }) => {
	const [name, setName] = useState('');
	const [position, setPosition] = useState('');
	const [nickname, setNickname] = useState('');
	const [description, setDescription] = useState('');

	//remove when error state is added
	const errorMessage = '';

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === '' || position === '' || nickname === '') {
			M.toast({ html: 'Please add data to all fields' });
		} else {
			const newSmurf = {
				name,
				position,
				nickname,
				description,
			};

			addSmurf(newSmurf);

			M.toast({ html: `${nickname} added successfully.` });
			// clear fields
			setName('');
			setPosition('');
			setNickname('');
			setDescription('');
		}
	};

	return (
		<section>
			<h2>Add Smurf</h2>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>Name:</label>
					<br />
					<input
						onChange={(e) => setName(e.target.value)}
						value={name}
						name='name'
						id='name'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='position'>Position:</label>
					<br />
					<input
						onChange={(e) => setPosition(e.target.value)}
						value={position}
						name='position'
						id='position'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='nickname'>Nickname:</label>
					<br />
					<input
						onChange={(e) => setNickname(e.target.value)}
						value={nickname}
						name='nickname'
						id='nickname'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='description'>Description:</label>
					<br />
					<textarea
						onChange={(e) => setDescription(e.target.value)}
						value={description}
						name='description'
						id='description'
					/>
				</div>
				{errorMessage && (
					<div
						data-testid='errorAlert'
						className='alert alert-danger'
						role='alert'
					>
						Error: {errorMessage}
					</div>
				)}
				<button>Submit Smurf</button>
			</form>
		</section>
	);
};

AddForm.propTypes = {
	addSmurf: PropTypes.func.isRequired,
};
export default connect(null, { addSmurf })(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value.
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.
