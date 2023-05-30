import {createStore, combineReducers} from "redux";
import productReducer from "./reducers/productReducer";
import basketReducer from "./reducers/basketReduser";

// store - хранилище
// reducer - отдельная часть внутри хранилища (каждому логическому элементу - свой редюсер);

const store = createStore(combineReducers({
    product: productReducer,
    basket: basketReducer
}));

export default store;