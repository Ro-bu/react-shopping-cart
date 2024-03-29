import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    count: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        reduceCount:(state, action)=>{
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.count = cartItem.count-1;
        },
        increaseCount:(state, action)=>{
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.count = cartItem.count+1;
        },
        removeProduct:(state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        },
        addProduct:(state, action) => {
            state.cartItems.push(action.payload);
        },
        calculateTotals: (state, action) => {
            let total = 0
            let count = 0;
            state.cartItems.forEach((item) => {
                total = state.total + item.price
                count = count + item.count;
            })
            state.total = total;
            state.count = count;
        }
    }
})

export const {reduceCount, increaseCount, addProduct, removeProduct, calculateTotals} = cartSlice.actions;

export default cartSlice.reducer;