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
        incrementProductCounts: (state, action) => {
            const addingProduct = state.cartArr.find(el => el.id === action.payload);
            const indexProduct = state.cartArr.indexOf(addingProduct);
            state.cartArr[indexProduct].counts ++;
        },
        decrementProductCounts: (state, action) => {
            const addingProduct = state.cartArr.find(el => el.id === action.payload);
            const indexProduct = state.cartArr.indexOf(addingProduct);
            state.cartArr[indexProduct].counts - 1 > 0 && state.cartArr[indexProduct].counts --;
        },
        deleteProductFromCart: (state, action) => {
            state.cartArr = state.cartArr.filter(el => el.id !== action.payload);
        },
    },
    selectors: {
        getCartArr: (state) => state.cartArr,
        getCountProductsInCart: (state) => state.cartArr.length, 
    },
});

export const {
    addProductToCart,
    incrementProductCounts,
    decrementProductCounts,
    deleteProductFromCart,
} = cartSlice.actions;

export const {
    getCartArr,
    getCountProductsInCart,
} = cartSlice.selectors;

export default cartSlice.reducer;