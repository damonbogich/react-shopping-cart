import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';



// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ProductContext from './Contexts/ProductContext';
import ShoppingCart from './components/ShoppingCart';
import CartContext from './Contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	//step 1: add item functionality
	const addItem = item => {
		setCart([...cart, {item}]);
	};

	//STEP 3 - Providing data with ProductContext: 
		//Import ProductContext.js
		//wrap all components and routes inside of ProductContext.Provider
		//pass the value prop: pass in products state and addItem function
		//Now that we're providing our products state and addItem function we can refactor our products route to no longer use render props.



	//Step 6:  Providing data with CartContext	
		//Bring our newly created CartContext into our App.js and wrap all of our components inside of our CartContext.Provider. Make sure our ProductContext.Provider is still the root provider.	
		//Now pass a value prop to our CartContext.Provider, this value prop is going to contain our cart state.
		//Now that we're providing our cart data, we can start to refactor our Navigation and ShoppingCart components.
		//Go ahead and refactor the ShoppingCart route to no longer use render props. This will throw us an error, but we'll be able to resolve it quickly.
		//While were at it let's go ahead and remove the props from our navigation as well.


	return (
		<div className="App">
			<ProductContext.Provider value = {{products, addItem}}>
				<CartContext.Provider value = {cart}>
					<Navigation  />

					{/* Routes */}
					<Route
						exact
						path="/"
						component = {Products}
					/>

					<Route
						path="/cart"
						component = {ShoppingCart}
					/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
