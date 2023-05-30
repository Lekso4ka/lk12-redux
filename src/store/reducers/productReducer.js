// state - данные, которые работают сдесь и сейчас
// action - объект, который используется в момент, когда мы планируем модифицировать какие-то данные
// action.type - тип действия (фраза, написанная большими буквами - как константа) INC ++ DEC --
// action.payload - что надо сделать с данными в зависимости от action.type

const initialState = [
    {id: 1, name: "Картошка", price: 54},
    {id: 2, name: "Лук", price: 18},
    {id: 3, name: "Опята", price: 238}
]

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CLEAR":
            return [];
        case "DEL":
            return state.filter(el => el.id !== action.payload);
        case "ADD": 
            const data = {...action.payload}
            data.id = state[state.length - 1].id + 1
            return [...state, data];
        default: return state;
    }
}

export default productReducer;