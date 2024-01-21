import productsSlice,
{
    filterProducts,
    clearFilterProducts,
    searchProducts,
    setCurrentPage,
    setCurrentProduct,
} from "../redux/slices/productsSlice";

const currentState = {
    productsArr: [
        {
            id: 1,
            title: "July",
            category: "men",
            price: 1,
        },
    ],
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
};

describe("productsSlice", () => {
    it("currentCategory should be payload value", () => {
        const payload = "men";
        const result = productsSlice(currentState, filterProducts(payload));
        expect(result.currentCategory).toEqual(payload);
    });
    it("filteredProductsArr should be select payload category products", () => {
        const payload = "men";
        const result = productsSlice(currentState, filterProducts(payload));
        expect(result.filteredProductsArr).toEqual(result.productsArr);
    });
    it("countProducts should be includes one product", () => {
        const payload = "men";
        const result = productsSlice(currentState, filterProducts(payload));
        expect(result.countProducts).toEqual(1);
    });
    it("newProductsArr should be equal filteredProductsArr", () => {
        const payload = "men";
        const result = productsSlice(currentState, filterProducts(payload));
        expect(result.newProductsArr).toEqual(result.filteredProductsArr);
    });



    it("newProductsArr should be empty", () => {
        const result = productsSlice(currentState, clearFilterProducts());
        expect(result.newProductsArr).toEqual([]);
    });
    it("countProducts should be set to the new product count from searchedProductsArr if it is not empty, otherwise ProductsArr", () => {
        const result = productsSlice(currentState, clearFilterProducts());
        expect(result.countProducts).toEqual(1);
    });



    it("searchedProductsArr should be equal productsArr", () => {
        const payload = "july";
        const result = productsSlice(currentState, searchProducts(payload));
        expect(result.searchedProductsArr).toEqual(currentState.productsArr);
    });
    it("countProducts should be equal searchedProductsArr length", () => {
        const payload = "july";
        const result = productsSlice(currentState, searchProducts(payload));
        expect(result.countProducts).toEqual(result.searchedProductsArr.length);
    });
    it("newProductsArr should be equal searchedProductsArr", () => {
        const payload = "july";
        const result = productsSlice(currentState, searchProducts(payload));
        expect(result.newProductsArr).toEqual(result.searchedProductsArr);
    });



    it("currentPage should be equal payload", () => {
        const payload = 2;
        const result = productsSlice(currentState, setCurrentPage(payload));
        expect(result.currentPage).toEqual(payload);
    });



    it("currentProduct should be equal payload", () => {
        const payload = {
            id: 1,
            title: "July",
            category: "men",
            price: 1,
        };
        const result = productsSlice(currentState, setCurrentProduct(payload));
        expect(result.currentProduct).toEqual(payload);
    });
});