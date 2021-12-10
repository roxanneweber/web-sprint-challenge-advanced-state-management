import React, { useState } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddSmurfModal = ({ addSmurf }) => {
	const [name, setName] = useState('');
	const [position, setPosition] = useState('');
	const [nickname, setNickname] = useState('');
	const [description, setDescription] = useState('');

	// added later
	const errorMessage = {};

	const onSubmit = (e) => {
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
		<div
			id='add-smurf-modal'
			className='modal'
			style={{ width: '75%', height: '85%' }}
		>
			<div className='modal-content'>
				<h2>Add Smurf</h2>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							value={name}
							name='name'
							id='name'
							onChange={(e) => setName(e.target.value)}
						/>
						<label htmlFor='name' className='active'>
							Name:
						</label>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							value={position}
							name='position'
							id='position'
							onChange={(e) => setName(e.target.value)}
						/>
						<label htmlFor='name' className='active'>
							Position:
						</label>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							value={nickname}
							name='nickname'
							id='nickname'
							onChange={(e) => setName(e.target.value)}
						/>
						<label htmlFor='name' className='active'>
							Nickname:
						</label>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							value={description}
							name='description'
							id='description'
							onChange={(e) => setName(e.target.value)}
						/>
						<label htmlFor='name' className='active'>
							Name:
						</label>
					</div>
				</div>

				<div className='modal-footer'>
					{errorMessage && (
						<div
							data-testid='errorAlert'
							className='alert alert-danger'
							role='alert'
						>
							Error: {errorMessage}
						</div>
					)}
					<a
						href='#!'
						onClick={onSubmit}
						className='modal-close waves-effect blue waves-light btn'
					>
						Submit
					</a>
				</div>
			</div>
		</div>
	);
};

AddSmurfModal.propTypes = {
	addSmurf: PropTypes.func.isRequired,
};

export default AddSmurfModal;
