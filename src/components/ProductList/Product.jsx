import { useDispatch } from "react-redux";

import { delProduct } from "../../store/actions/productActions";
import { addToBasket } from "../../store/actions/basketActions";
const Product = ({
    name,
    price,
    id
}) => {
    const dispatch = useDispatch();

    // const del = () => {
    //     dispatch({type: "DEL", payload: id})
    // }

    return <tr>
        <td>{name}</td>
        <td>{price} ₽</td>
        <td>
            <button onClick={() => dispatch(addToBasket({
                name, 
                price, 
                id
            }))}>В корзину</button>
            {/* <button onClick={del}>Удалить</button> */}
            <button onClick={() => dispatch(delProduct(id))}>Удалить</button>
        </td>
    </tr>
}

export default Product;