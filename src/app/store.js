import logger from "redux-logger";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";

const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
