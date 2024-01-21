import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartArr: [],
        message: "",
    },
    reducers: {
        addProductToCart: (state, action) => {
            const addingProduct = state.cartArr.find(el => el.id === action.payload.id);
            if (!addingProduct) {
                state.cartArr = [...state.cartArr, { ...action.payload, counts: 1, sumPrice: action.payload.price }];
            } else {
                const indexProduct = state.cartArr.indexOf(addingProduct);
                state.cartArr[indexProduct].counts++;
                state.cartArr[indexProduct].sumPrice = Number((state.cartArr[indexProduct].price * state.cartArr[indexProduct].counts).toFixed(2));
            }
        },
        incrementProductCounts: (state, action) => {
            const addingProduct = state.cartArr.find(el => el.id === action.payload);
            const indexProduct = state.cartArr.indexOf(addingProduct);
            state.cartArr[indexProduct].counts++;
            state.cartArr[indexProduct].sumPrice = Number((state.cartArr[indexProduct].price * state.cartArr[indexProduct].counts).toFixed(2));
        },
        decrementProductCounts: (state, action) => {
            const addingProduct = state.cartArr.find(el => el.id === action.payload);
            const indexProduct = state.cartArr.indexOf(addingProduct);
            state.cartArr[indexProduct].counts - 1 > 0 && state.cartArr[indexProduct].counts--;
            state.cartArr[indexProduct].sumPrice = Number((state.cartArr[indexProduct].price * state.cartArr[indexProduct].counts).toFixed(2));
        },
        deleteProductFromCart: (state, action) => {
            state.cartArr = state.cartArr.filter(el => el.id !== action.payload);
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        clearMessage: (state) => {
            state.message = "";
        },
        clearCart: (state) => {
            state.cartArr = [];
        },
    },
    selectors: {
        getCartArr: (state) => state.cartArr,
        getCountProductsInCart: (state) => state.cartArr.length,
        getTotalPrice: (state) => state.cartArr.reduce((accumulator, object) => {
            return accumulator + object.sumPrice;
        }, 0).toFixed(2),
        getMessage: (state) => state.message,
    },
});

export const {
    addProductToCart,
    incrementProductCounts,
    decrementProductCounts,
    deleteProductFromCart,
    setMessage,
    clearMessage,
    clearCart,
} = cartSlice.actions;

export const {
    getCartArr,
    getCountProductsInCart,
    getTotalPrice,
    getMessage,
} = cartSlice.selectors;

export default cartSlice.reducer;