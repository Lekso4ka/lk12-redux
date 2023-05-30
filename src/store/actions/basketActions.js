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

export { addToBasket, sumResult }