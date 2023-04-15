import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
  },
});

export default store;