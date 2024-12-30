import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCartItmes, updateCartItmes } from '../Slice/CartItemSlice';
function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const cartData = useSelector((state) => state.cart.cartItems);
    const products = useSelector((state) => state.products);
    const [totalAmount,setTotalAmount] = useState(0);
    const dispatch = useDispatch(); // For dispatching actions
    // console.log(totalAmount);
    
    useEffect(() => {
        const updatedCartItems = products.filter((product) => {
            return cartData.some((item) => item.id === product.productId);
        });
        setCartItems(updatedCartItems);
        let tempAmount = 0;
        cartData.forEach(element => {
            const product = products.find(item => item.productId === element.id);
            if(product) {
                tempAmount += product.price * element.quantity;
                }
        });
        setTotalAmount(tempAmount);
    }, [cartData, products]);

    
    // Function to handle quantity change (either increment or decrement)
    const handleQuantityChange = (productId, newQuantity) => {
        // console.log(productId);
        
        if (newQuantity > 0) {
            // Dispatch action to update the cart (You can implement the action in your Redux store)
            dispatch(updateCartItmes({id:productId,quantity:newQuantity}));
        }
    };

    // Function to handle increment
    const incrementQuantity = (productId, currentQuantity) => {
        handleQuantityChange(productId, currentQuantity + 1);
    };

    // Function to handle decrement
    const decrementQuantity = (productId, currentQuantity) => {
        if (currentQuantity > 1) {
            handleQuantityChange(productId, currentQuantity - 1);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-lg text-gray-600">Your cart is empty!</p>
            ) : (
                <ul className="space-y-4">
                    {cartData.map((item) => {
                        // console.log(item);
                        
                        const productData = products.find(product => product.productId === item.id);
                        return (
                            <li key={item.id} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition duration-300">
                                <div className="flex items-center space-x-4">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold text-gray-800">{productData.productName}</span>
                                        <span className="text-sm text-gray-500">Price: ₹{productData.price}</span>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                                    <button 
                                        onClick={() => decrementQuantity(item.id, item.quantity)}
                                        className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400 transition duration-200"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                        className="w-16 p-2 border border-gray-300 rounded-md text-center"
                                    />
                                    <button 
                                        onClick={() => incrementQuantity(item.id, item.quantity)}
                                        className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400 transition duration-200"
                                    >
                                        +
                                    </button>
                                </div>

                                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                                    <span className="text-lg font-semibold text-gray-800">{item.quantity} x ₹{productData.price}</span>
                                    <button className="text-red-500 hover:text-red-700 text-sm font-semibold" onClick={()=>dispatch(removeCartItmes(item.id))} >Remove</button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}

            {cartItems.length > 0 && (
                <div className="mt-6 flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-4 rounded-lg">
                    <span className="text-xl font-semibold text-gray-800">
                        Total: ₹
                        {totalAmount}
                    </span>
                    <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300 mt-4 sm:mt-0">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
}

export default Cart;
