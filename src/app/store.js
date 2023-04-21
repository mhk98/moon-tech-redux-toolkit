import logger from "redux-logger";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
import productsSlice from "../features/products/productsSlice";

const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
    products: productsSlice
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
