import { useDispatch } from "react-redux";

import { increment, decrement, delFromBasket } from "../../storeRtk/reducers/basketReducer";

const Row = ({
    index,
    name,
    price,
    id, 
    cnt
}) => {
    const dispatch = useDispatch();

    return <tr>
        <td>{index}</td>
        <td>{name}</td>
        <td>
            <button
                disabled={cnt <= 1}
                onClick={() => dispatch(decrement(id))}
            >-</button>
            &nbsp;{cnt}&nbsp;
            <button
                onClick={() => dispatch(increment(id))}
            >+</button>
        </td>
        <td>{price * cnt} ₽</td>
        <td>
            <button
                onClick={() => dispatch(delFromBasket(id))}
            >Удалить</button>
        </td>
    </tr>
}

export default Row;