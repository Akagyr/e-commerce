import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
        newProductsArr: [],
        filteredProductsArr: [],
        searchedProductsArr: [],
        currentPage: 0,
        countProducts: 0,
        countProductsInPage: 6,
        startShowingProduct: 0,
        endShowingProduct: 6,
        currentProduct: {},
        currentCategory: "",
    },
    reducers: {
        filterProducts: (state, action) => {
            state.currentCategory = action.payload;
            state.filteredProductsArr = (state.searchedProductsArr.length !== 0 ? state.searchedProductsArr : state.productsArr)
                .filter(el => el.category === action.payload);
            state.currentPage = 0;
            state.countProducts = state.filteredProductsArr.length;
            state.newProductsArr = state.filteredProductsArr;
        },
        clearFilterProducts: (state) => {
            state.filteredProductsArr = [];
            state.newProductsArr = state.searchedProductsArr;
            state.countProducts = state.searchedProductsArr.length !== 0 ? state.searchedProductsArr.length : state.productsArr.length;
        },
        searchProducts: (state, action) => {
            state.currentCategory = "";
            state.searchedProductsArr = state.productsArr.filter(el => el.title.toLowerCase().includes(action.payload.toLowerCase()));
            state.currentPage = 0;
            state.countProducts = state.searchedProductsArr.length;
            state.newProductsArr = state.searchedProductsArr;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
            state.newProductsArr = state.productsArr;
        },
        setCurrentProduct: (state, action) => {
            state.currentProduct = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.statusApi = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.statusApi = "success";
                state.productsArr = action.payload;
                state.countProducts = state.productsArr.length;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.statusApi = "error";
            });
    },
    selectors: {
        getProductsArr: (state) => (state.newProductsArr.length !== 0 ? state.newProductsArr : state.productsArr)
            .slice(state.startShowingProduct + (state.currentPage * state.countProductsInPage), state.endShowingProduct + (state.currentPage * state.countProductsInPage)),
        getProductsCountPages: (state) => Math.ceil(state.countProducts / state.countProductsInPage),
        getProductsCategoryArr: (state) => [...new Set(state.productsArr.map(el => el.category))],
        getCurrentPage: (state) => state.currentPage,
        getCurrentProduct: (state) => state.currentProduct,
        getStatusApi: (state) => state.statusApi,
        getCurrentCategory: (state) => state.currentCategory,
    },
});

export const {
    filterProducts,
    clearFilterProducts,
    searchProducts,
    setCurrentPage,
    setCurrentProduct,
} = productsSlice.actions;

export const {
    getProductsArr,
    getProductsCountPages,
    getProductsCategoryArr,
    getCurrentPage,
    getCurrentProduct,
    getStatusApi,
    getCurrentCategory,
} = productsSlice.selectors;

export default productsSlice.reducer;