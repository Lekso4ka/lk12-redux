const addToBasket = (obj) => {
    return {
        type: "ADD_TO_BASKET",
        payload: obj
    }
}

const sumResult = () => {
    return {
        type: "SUM"
    }
}

const increment = (id) => {
    return {
        type: "INCREMENT",
        payload: id
    }
}

const decrement = (id) => {
    return {
        type: "DECREMENT",
        payload: id
    }
}

const delFromBasket = (id) => {
    return {
        type: "DEL_FROM_BASKET",
        payload: id
    }
}

export { addToBasket, increment, decrement, delFromBasket }