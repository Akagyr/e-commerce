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
        countProductsInPage: 6,
        showingProductsArr: [],
        startShowingProduct: 0,
        endShowingProduct: 6,
    },
    reducers: {
        filterProducts: (state, action) => {
            state.filteredProductsArr = (state.searchedProductsArr.length !== 0 ? state.searchedProductsArr : state.productsArr)
                .filter(el => el.category.toLowerCase() === action.payload.toLowerCase());
            state.newProductsArr = state.filteredProductsArr;
        },
        clearFilterProducts: (state) => {
            state.newProductsArr = [];
            state.filteredProductsArr = [];
        },
        searchProducts: (state, action) => {
            state.searchedProductsArr = (state.filteredProductsArr.length !== 0 ? state.filteredProductsArr : state.productsArr)
                .filter(el => el.title.toLowerCase().includes(action.payload.toLowerCase()));
            state.newProductsArr = state.searchedProductsArr;
        },
        clearSearchProducts: (state) => {
            state.newProductsArr = [];
            state.searchedProductsArr = [];
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
            state.showingProductsArr = state.productsArr
                .slice(state.startShowingProduct + (state.currentPage * state.countProductsInPage), state.endShowingProduct + (state.currentPage * state.countProductsInPage));
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
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.statusApi = "error";
            });
    },
    selectors: {
        getProductsArr: (state) => {
            if (state.newProductsArr.length !== 0) { return state.newProductsArr; }
            else if (state.showingProductsArr.length !== 0) { return state.showingProductsArr; }
            else { return state.productsArr.slice(state.startShowingProduct, state.endShowingProduct); }
        },
        getProductsCountPages: (state) => Math.ceil((state.newProductsArr.length !== 0 ? state.newProductsArr.length : state.productsArr.length) / state.countProductsInPage),
        getProductsCategoryArr: (state) => [...new Set(state.productsArr.map(el => el.category))],
        getCurrentPage: (state) => state.currentPage,
    },
});

export const {
    filterProducts,
    clearFilterProducts,
    searchProducts,
    clearSearchProducts,
    setCurrentPage,
} = productsSlice.actions;

export const {
    getProductsArr,
    getProductsCountPages,
    getProductsCategoryArr,
    getCurrentPage,
} = productsSlice.selectors;

export default productsSlice.reducer;