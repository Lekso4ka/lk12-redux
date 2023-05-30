const initialState = [
    {id: 1, name: "Картошка", price: 54, cnt: 1}
]

const basketReducer = (state = initialState, action)=> {
    const data = action.payload;
    switch(action.type) {
        case "ADD_TO_BASKET": 
            const isInBasket = state.filter(el => el.id === data.id);
            return isInBasket.length > 0 
                ? state.map(el => {
                    if (el.id === data.id) {
                        el.cnt += 1;
                    }
                    return el
                })
                : [...state, {...data, cnt: 1}]
        // case "SUM":
        //     return state.reduce((acc, el) => {
        //         return acc + el.cnt * el.price
        //     }, 0)
        default: return state;
    }
}

export default basketReducer;