import React from 'react';
import PropTypes from 'prop-types';

const AddSmurfModal = () => {
	const [name, setName] = useState('');
	const [position, setPosition] = useState('');
	const [nickname, setNickname] = useState('');
	const [description, setDescription] = useState('');

	const errorMessage = {};

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
		<div
			id='add-smurf-modal'
			className='modal'
			style={{ width: '75%', height: '85%' }}
		>
			<div className='modal-content'>
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
			</div>
		</div>
	);
};

export default AddSmurfModal;
