import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartArr: [],
    },
    reducers: {
        addProductToCart: (state, action) => {
            const addingProduct = state.cartArr.find(el => el.id === action.payload.id);
            if (!addingProduct) {
                state.cartArr = [...state.cartArr, {...action.payload, counts: 1}];
            } else {
                const indexProduct = state.cartArr.indexOf(addingProduct);
                state.cartArr[indexProduct].counts ++;
            }
        },
    },
    selectors: {
        getCartArr: (state) => state.cartArr,
        getCountProductsInCart: (state) => state.cartArr.length, 
    },
});

export const {
    addProductToCart,
} = cartSlice.actions;

export const {
    getCartArr,
    getCountProductsInCart,
} = cartSlice.selectors;

export default cartSlice.reducer;