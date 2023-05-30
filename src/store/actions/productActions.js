const addProduct = (obj) => {
    return {
        type: "ADD",
        payload: obj
    }
}

const delProduct = (id) => {
    return {
        type: "DEL",
        payload: id
    }
}

export { addProduct, delProduct }