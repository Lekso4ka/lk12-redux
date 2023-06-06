import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        {id: 1, name: "Картошка", price: 54},
        {id: 2, name: "Лук", price: 18},
        {id: 3, name: "Опята", price: 238}
    ]
}

const productReducer = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const data = {...action.payload}
            data.id = state.data[state.data.length - 1].id + 1
            state.data = [...state.data, data];
        },
        delProduct: (state, action) => {
            state.data =  state.data.filter(el => el.id !== action.payload);
        }
    }
})

export const {addProduct, delProduct} = productReducer.actions;
export default productReducer.reducer;