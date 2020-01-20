import React, {useContext} from 'react';
import CartContext from '../Contexts/CartContext';
// Components
import Item from './ShoppingCartItem';


//Step 7:  
	//First, let's head to our ShoppingCart component and import the useContext hook and our CartContext.
	//Now in the component, pass CartContext to the useContext hook and assign it to a variable named cart.
	//Inside of our component we now need to remove all instances of props.



const ShoppingCart = () => {
	const cart = useContext(CartContext);
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.item.price;
		}, 0).toFixed(2);
	};
	//Think about moving this up
	

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
