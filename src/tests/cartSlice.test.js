import cartSlice,
{
    addProductToCart,
    incrementProductCounts,
    decrementProductCounts,
    deleteProductFromCart,
    setMessage,
    clearMessage,
    clearCart,
} from "../redux/slices/cartSlice";

const currentState = {
    cartArr: [
        {
            id: 1,
            price: 2,
            counts: 2,
            sumPrice: 2,
        },
    ],
};

describe("cartSlice", () => {
    it("should handle add new object in cartArr", () => {
        const payload = {
            id: 2,
        };
        const result = cartSlice(currentState, addProductToCart(payload));
        expect(result.cartArr.length).toEqual(2);
    });
    it("should handle update counts in object in cartArr", () => {
        const payload = {
            id: 1,
        };
        const result = cartSlice(currentState, addProductToCart(payload));
        expect(result.cartArr[0].counts).toEqual(3);
    });
    it("should handle update sumPrice in object in cartArr", () => {
        const payload = {
            id: 1,
        };
        const result = cartSlice(currentState, addProductToCart(payload));
        expect(result.cartArr[0].sumPrice).toEqual(6);
    });



    it("should handle increment product counts", () => {
        const payload = 1;
        const result = cartSlice(currentState, incrementProductCounts(payload));
        expect(result.cartArr[0].counts).toEqual(3);
    });
    it("should handle increment product sumPrice", () => {
        const payload = 1;
        const result = cartSlice(currentState, incrementProductCounts(payload));
        expect(result.cartArr[0].sumPrice).toEqual(6);
    });



    it("should handle decrement product counts", () => {
        const payload = 1;
        const result = cartSlice(currentState, decrementProductCounts(payload));
        expect(result.cartArr[0].counts).toEqual(1);
    });
    it("should handle decrement product sumPrice", () => {
        const payload = 1;
        const result = cartSlice(currentState, decrementProductCounts(payload));
        expect(result.cartArr[0].sumPrice).toEqual(2);
    });



    it("should handle delete product from cart", () => {
        const payload = 1;
        const result = cartSlice(currentState, deleteProductFromCart(payload));
        expect(result.cartArr.length).toEqual(0);
    });



    it("message text should be set payload text", () => {
        const payload = "Message";
        const result = cartSlice(currentState, setMessage(payload));
        expect(result.message).toEqual(payload);
    });



    it("message text should be clear", () => {
        const result = cartSlice(currentState, clearMessage());
        expect(result.message).toEqual("");
    });



    it("cart should be clear", () => {
        const result = cartSlice(currentState, clearCart());
        expect(result.cartArr.length).toEqual(0);
    });
});