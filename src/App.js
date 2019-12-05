import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import EditProduct from './Components/Form/EditProduct'

//  Add components
import Dashboard from './Components/Dashboard/Dashboard';
import Add from './Components/Add/Add'



function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Dashboard} />
				<Route exact path='/add' component={Add} />
				<Route exact path='/editProduct/:id' component={EditProduct}/>
			</Switch>
		</div>
	);
}

export default App;
