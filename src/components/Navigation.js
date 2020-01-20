import React, {useContext} from 'react';
import CartContext from '../Contexts/CartContext';
import { NavLink } from 'react-router-dom';

//Step 7: Same thing as for shopping cart
	//First import the useContext hook and our CartContext
	//	Next, pass our CartContext to the useContext hook and assign it to a variable named cart.
	//Lastly we need to remove all instances of props
	

const Navigation = () => {
	//step 7
	const cart = useContext(CartContext);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
