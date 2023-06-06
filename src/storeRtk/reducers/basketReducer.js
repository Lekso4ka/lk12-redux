import { createSlice } from "@reduxjs/toolkit";

const basketReducer = createSlice({
    name: "basket",
    initialState: {value: []},
    reducers: {
        addToBasket: (state, action) => {
            const data = action.payload;
            const isInBasket = state.value.filter(el => el.id === data.id);
            state.value = isInBasket.length > 0
                ? state.value.map(el => {
                    if (el.id === data.id) {
                        el.cnt += 1;
                    }
                    return el
                })
                : [...state.value, {...data, cnt: 1}]
        },
        increment: (state, action) => {
            const data = action.payload;
            state.value = state.value.map(el => {
                if (el.id === data) {
                    el.cnt += 1;
                }
                return el
            })
        },
        decrement: (state, action) => {
            const data = action.payload;
            state.value = state.value.map(el => {
                if (el.id === data) {
                    el.cnt -= 1;
                }
                return el
            })
        },
        delFromBasket: (state, action) => {
            const data = action.payload;
            state.value = state.value.filter(el => el.id !== data)
        }
    }
})

export const { addToBasket, increment, decrement, delFromBasket } = basketReducer.actions;

export default basketReducer.reducer;