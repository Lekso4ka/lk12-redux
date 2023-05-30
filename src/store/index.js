import {createStore} from "redux";
import productReducer from "./reducers/productReducer";

// store - хранилище
// reducer - отдельная часть внутри хранилища (каждому логическому элементу - свой редюсер);

const store = createStore(productReducer);

export default store;