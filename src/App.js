import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
	return (
		<Provider store={store}>
			<div className='App'>
				<Header />

				<main>
					<SmurfList />
					<AddForm />
				</main>
			</div>
		</Provider>
	);
};

export default App;

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.
