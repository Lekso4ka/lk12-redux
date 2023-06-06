import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/productReducer";
import BasketReducer from "./reducers/basketReducer";

const store = configureStore({
    reducer: {
        "product": ProductReducer,
        "basket": BasketReducer
    }
})

export default store;