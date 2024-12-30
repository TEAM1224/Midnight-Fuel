import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        quantity: 0,
    },
    reducers: {
        addCartItmes(state, action) {
            const existingProduct = state.cartItems.find(item => item.id === action.payload);
            console.log(action.payload);
            
            if (existingProduct) {
                // If the item already exists in the cart, increment its quantity by 1
                existingProduct.quantity += 1;
            } else {
                // If the item doesn't exist in the cart, add it with quantity 1
                state.cartItems.push({ id:action.payload, quantity: 1 });
            }
            console.log(state.cartItems);
        
        },
        removeCartItmes(state, action) {
            const product = state.cartItems.find(item => item.id === action.payload);
            if (product) {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
                state.cartTotal -= product.price * product.quantity;
            }
        },
        updateCartItmes(state, action) {
            const { id, quantity } = action.payload;
            console.log(id,quantity);
            
            // Find the product in the cart
            const product = state.cartItems.find(item => item.id === id);
            
            if (product) {
                // Return a new array with the updated quantity for the specified product
                product.quantity = quantity;
            }
            // console.log(state.cartItems);
            
        }
        
    },
});

export const { addCartItmes, removeCartItmes, updateCartItmes } = cartSlice.actions;
export default cartSlice.reducer;
