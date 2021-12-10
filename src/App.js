import React from 'react';
import { Provider } from 'react-redux';
import AddBtn from './components/layout/AddBtn';
import store from './store';
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css/dist/js/materialize.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
	return (
		<Provider store={store}>
			<div className='App'>
				<Header />

				<main>
					<AddBtn />
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
