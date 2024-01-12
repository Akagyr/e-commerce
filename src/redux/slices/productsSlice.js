import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        return data;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        productsArr: [],
        statusApi: "",
        isLoading: false,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.statusApi = "loading";
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.statusApi = "success";
                state.productsArr = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.statusApi = "error";
                state.isLoading = true;
            });
    },
    selectors: {
        getProductsArr: (state) => state.productsArr,
    },
});

// export const {} = productsSlice.actions;

export const {
    getProductsArr,
} = productsSlice.selectors;

export default productsSlice.reducer;